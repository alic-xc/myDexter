export interface IBreach {
  username: string;
  url: string;
  password: string;
  ipAddress?: string;
  computerName?: string;
  date: string;
  status?: string;
}

interface Breach {
  username: string;
  password: string;
  updated_on: string;
  domain: string;
  url: string;
  email: string;
  email_domain: string;
  id: number;
  log_id: string;
  _id: string;
}

export interface AllBreachesResponse {
  allbreaches: Breach[];
  createdAt: string;
  updatedAt: string;
}

interface Alert {
  _id: string;
  userId: string;
  breach_confirmed: boolean;
  date_sent: string;
  recipient: string;
  db_user_disg: string;
  breach_result_ids: string[];
  __v: number;
}

interface BreachResult {
  username: string;
  password: string;
  updated_on: string;
  domain: string;
  url: string;
  email: string;
  email_domain: string;
  id: number;
  log_id: string;
  _id: string;
}

interface BreachData {
  _id: string;
  db_user_disg: string;
  userId: string;
  results: BreachResult[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Alert {
  _id: string;
  userId: string;
  breach_confirmed: boolean;
  date_sent: string;
  recipient: string;
  db_user_disg: string;
  breach_result_ids: string[];
  __v: number;
}

export interface AllAlertsResponse {
  breachData: BreachData[];
  all_alerts: Alert[];
}

interface MatchedDoc {
  username: string;
  password: string;
  updated_on: string;
  domain: string;
  url: string;
  email: string;
  email_domain: string;
  id: number;
  log_id: string;
  _id: string;
}

export interface AlertResponseData {
  matchedDocs: MatchedDoc[];
}

export interface MonitoredUsersResponse {
  success: boolean;
  monitored_users: string[];
}

interface MatchedBracket {
  alertChannels: {
    email: boolean;
    inApp: boolean;
    smsAlerts: boolean;
  };
  user_monitored_email: string;
  emailAlert: string;
  severity: string;
  _id: string;
}

export interface EmailPreferences {
  success: boolean;
  matchedBracket: MatchedBracket;
}
