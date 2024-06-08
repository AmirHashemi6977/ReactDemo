import Mock from "../mock";
import shortId from "shortid";

const NotificationDB = {
  list: [
    {
      id: shortId.generate(),
      heading: "پیام",
      icon: { name: "chat", color: "primary" },
      timestamp: 1712738085000,
      title: "پیام جدید از  موسی زاده",
      subtitle: "سلام، پیشرفت کار ...",
      path: "chat",
    },
    {
      id: shortId.generate(),
      heading: "هشدار",
      icon: { name: "notifications", color: "error" },
      timestamp: 1712738085000,
      title: "شلوغی سرور",
      subtitle: " ترافیک سایت به 2M رسید",
      path: "page-layouts/user-profile",
    },
    {
      id: shortId.generate(),
      heading: "پیام",
      icon: { name: "chat", color: "primary" },
      timestamp: 1712738085000,
      title: "پیام جدید از  مرادی",
      subtitle: "سلام، جلسه بعدی ...",
      path: "chat",
    },
  ],
};

Mock.onGet("/api/notification").reply(() => {
  const response = NotificationDB.list;
  return [200, response];
});

Mock.onPost("/api/notification/add").reply(() => {
  const response = NotificationDB.list;
  return [200, response];
});

Mock.onPost("/api/notification/delete").reply((config) => {
  let { id } = JSON.parse(config.data);
  console.log(config.data);

  const response = NotificationDB.list.filter(
    (notification) => notification.id !== id
  );
  NotificationDB.list = [...response];
  return [200, response];
});

Mock.onPost("/api/notification/delete-all").reply(() => {
  NotificationDB.list = [];
  const response = NotificationDB.list;
  return [200, response];
});
