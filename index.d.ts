export type Providers = "LOCAL" | "AWS";

export type Event =
  | "SESSION_CREATED"
  | "SESSION_CANCELLED"
  | "SESSION_COMPLETED"
  | "FILE_UPLOAD"
  | "FILE_DELETE";

export interface SessionRequest {
  file_size: number;
  file_name: string;
  mime_type: string;
  max_chunk: number;
  chunk_size: number;
  provider: Providers;
}

export interface UFile {
  id: string;
  file_name: string;
  file_path: string;
  file_size: number;
  file_type: string;
  uploaded_by: string;
  uploaded_at: string;
  is_deleted: boolean;
  checksum: string;
  description: string;
  provider: string;
  provider_metadata: object;
}

export interface Session {
  id: string;
  file_size: string;
  chunk_size: string;
  max_chunk: string;
  file_name: string;
  temp_path: string;
  owner_id: string;
  current_chunk: number;
  provider: Providers;
}

export interface WebhookEvent<Data extends object> {
  event: Event;
  data: Data;
}

export type WebhookEventSessionCreated = WebhookEvent<Session>;
export type WebhookEventSessionCancelled = WebhookEvent<Session>;
export type WebhookEventSessionCompleted = WebhookEvent<Session>;

export type WebhookEventFileUpload = WebhookEvent<UFile>;
export type WebhookEventFileDelete = WebhookEvent<UFile>;
