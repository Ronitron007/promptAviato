export interface User {
  name: string;
  initials: string;
  avatar?: string;
  color?: string;
}

export interface Attachment {
  id: string;
  name: string;
  type: 'doc' | 'pdf' | 'xls';
}

export interface ActivityItem {
  id: string;
  type: 'status_change' | 'message' | 'reacquisition';
  user: User;
  content: string;
  time: string;
  attachments?: Attachment[];
}