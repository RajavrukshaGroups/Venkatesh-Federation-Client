import React, { useEffect, useState } from "react";
import { Bell, ExternalLink } from "lucide-react";
import api from "@/services/api";

/* =========================
   DATE FORMATTER
========================= */
const formatDateTime = (date) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const time = d.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return `${day}/${month}/${year} · ${time}`;
};

const LIMIT = 5;

const MemberNotification = () => {
  const [notifications, setNotifications] = useState([]);
  const [company, setCompany] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const member = JSON.parse(localStorage.getItem("member") || "null");

  const fetchNotifications = async (pageNo = 1, append = false) => {
    try {
      const res = await api.get(
        `/member/auth/user/notification/${member._id}?page=${pageNo}&limit=${LIMIT}`,
      );
      console.log("response not", res);

      if (res?.success) {
        setCompany(res?.company);
        setHasMore(res?.pagination?.hasMore);

        setNotifications((prev) =>
          append ? [...prev, ...res?.data] : res?.data,
        );
      }
    } catch (err) {
      console.error("Notification fetch error", err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    if (!member?._id) return;
    fetchNotifications(1);
  }, [member?._id]);

  const handleShowMore = () => {
    setLoadingMore(true);
    const nextPage = page + 1;
    setPage(nextPage);
    fetchNotifications(nextPage, true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 mt-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-100 rounded-full">
          <Bell className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-800">Notifications</h1>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10 text-gray-500">
          Loading notifications...
        </div>
      )}

      {/* Empty */}
      {!loading && notifications.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          No notifications yet
        </div>
      )}

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.map((n) => (
          <div
            key={n._id}
            className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer"
            // onClick={() => n.url && window.open(n.url, "_blank")}
            onClick={() => {
              if (!n.url) return;

              const finalUrl = n.url.startsWith("http")
                ? n.url
                : `https://${n.url}`;

              window.open(finalUrl, "_blank");
            }}
          >
            <div className="flex gap-4">
              <div className="p-2 bg-blue-50 rounded-full">
                <Bell className="text-blue-600" size={18} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="font-semibold">{n.title}</h3>
                  {n.url && <ExternalLink size={14} />}
                </div>
                <p className="text-sm text-gray-600">{n.message}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {formatDateTime(n.sentAt)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More */}
      {hasMore && (
        <div className="text-center mt-6">
          <button
            onClick={handleShowMore}
            disabled={loadingMore}
            className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loadingMore ? "Loading..." : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
};

export default MemberNotification;
