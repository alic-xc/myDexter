export interface IMonitorEmail {
  username: string;
  monitoringStatus: React.ReactNode | string;
  lastScanDate: string;
  nextScanDate: string;
  monitoringFrequency: string;
}
