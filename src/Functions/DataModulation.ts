import { IGroupedPriority, IGroupedUser, ITicket, IUser } from "../IData";

export const filterByStatus = (data: ITicket[]) => {
  return data?.reduce((groupedTasks, task) => {
    const status = task.status;
    if (!groupedTasks[status]) {
      groupedTasks[status] = [];
    }
    groupedTasks[status].push(task);
    return groupedTasks;
  }, {} as IGroupedPriority);
};

export const filterByPriority = (data: ITicket[]) => {
  const priorityMap = {
    0: "No Priority",
    1: "Low",
    2: "Medium",
    3: "High",
    4: "Urgent",
  };
  data?.sort((a, b) => a.priority - b.priority);
  return data?.reduce((groupedTasks, task) => {
    const priority = priorityMap[task.priority];
    if (!groupedTasks[priority]) {
      groupedTasks[priority] = [];
    }
    groupedTasks[priority].push(task);
    return groupedTasks;
  }, {} as IGroupedPriority);
};

export const filterByUser = (data: ITicket[]) => {
  return data?.reduce((groupedTasks, task) => {
    const userId = task.userId;
    if (!groupedTasks[userId]) {
      groupedTasks[userId] = [];
    }
    groupedTasks[userId].push(task);
    return groupedTasks;
  }, {} as Record<string, ITicket[]>);
};

export const mapUser = (data: IUser[]) => {
  return data?.reduce((groupedUsers, user) => {
    const userId = user.id;
    groupedUsers[userId] = user.name;
    return groupedUsers;
  }, {} as IGroupedUser);
};
