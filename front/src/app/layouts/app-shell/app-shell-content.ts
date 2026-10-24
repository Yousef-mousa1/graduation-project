import { ChatSummary } from '../../model/chat';
import { UserSummary } from '../../model/user';

/** Placeholder data. Replace with the auth service and chat history once the backend is connected. */
export const PLACEHOLDER_USER: UserSummary = {
  name: 'Alex Mercer',
  email: 'alex@example.com',
};

export const RECENT_CHATS: readonly ChatSummary[] = [
  { title: 'Suspicious bank email', path: '/chat' },
  { title: 'Password check' },
  { title: 'invoice_urgent.pdf', path: '/analysis' },
];
