export interface ITicket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
}

export interface IUser {
  id: string;
  name: string;
  available: boolean;
}

export interface ICompleteData {
  tickets: ITicket[];
  users: IUser[];
}

export interface IGroupedPriority {
  [key: string]: ITicket[];
}
