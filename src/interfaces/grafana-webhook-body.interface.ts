export interface GrafanaWebhookBody {
  receiver: string;
  status: 'firing' | 'resolved';
  alerts: Alert[];
  groupLabels: Labels;
  commonLabels: Labels;
  commonAnnotations: Annotations;
  externalURL: string;
  version: string;
  groupKey: string;
  truncatedAlerts: number;
  orgId: number;
  title: string;
  state: string;
  message: string;
}

export interface Alert {
  status: string;
  labels: Labels;
  annotations: Annotations;
  startsAt: Date;
  endsAt: Date;
  generatorURL: string;
  fingerprint: string;
  silenceURL: string;
  dashboardURL: string;
  panelURL: string;
  values: null;
  valueString: string;
}

export interface Annotations {
  summary: string;
}

export interface Labels {
  alertname: string;
  instance: string;
}
