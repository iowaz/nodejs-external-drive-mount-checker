export interface DockerStatsInterface {
  Id: string;
  Created: Date;
  Path: string;
  Args: string[];
  State: State;
  Image: string;
  ResolvConfPath: string;
  HostnamePath: string;
  HostsPath: string;
  LogPath: string;
  Name: string;
  RestartCount: number;
  Driver: 'overlay2';
  Platform: 'linux';
  MountLabel: string;
  ProcessLabel: string;
  AppArmorProfile: AppArmorProfile;
  ExecIDs: null;
  HostConfig: HostConfig;
  GraphDriver: GraphDriver;
  Mounts: DockerStatsInterfaceMount[];
  Config: Config;
  NetworkSettings: NetworkSettings;
}

export enum AppArmorProfile {
  DockerDefault = 'docker-default',
  Unconfined = 'unconfined',
}

export interface Config {
  Hostname: string;
  Domainname: string;
  User: User;
  AttachStdin: boolean;
  AttachStdout: boolean;
  AttachStderr: boolean;
  ExposedPorts?: ExposedPorts;
  Tty: boolean;
  OpenStdin: boolean;
  StdinOnce: boolean;
  Env: string[];
  Cmd: string[] | null;
  Image: string;
  Volumes: Volumes | null;
  WorkingDir: string;
  Entrypoint: string[];
  OnBuild: null;
  Labels: Labels;
  Healthcheck?: Healthcheck;
  StopSignal?: string;
}

export interface ExposedPorts {
  '3000/tcp'?: The8192TCPClass;
  '9100/tcp'?: The8192TCPClass;
  '6881/tcp'?: The8192TCPClass;
  '6881/udp'?: The8192TCPClass;
  '8080/tcp'?: The8192TCPClass;
  '9090/tcp'?: The8192TCPClass;
  '9469/tcp'?: The8192TCPClass;
  '6379/tcp'?: The8192TCPClass;
  '9374/tcp'?: The8192TCPClass;
  '443/tcp'?: The8192TCPClass;
  '80/tcp'?: The8192TCPClass;
  '7878/tcp'?: The8192TCPClass;
  '8989/tcp'?: The8192TCPClass;
  '6767/tcp'?: The8192TCPClass;
  '9696/tcp'?: The8192TCPClass;
  '1900/udp'?: The8192TCPClass;
  '7359/udp'?: The8192TCPClass;
  '8096/tcp'?: The8192TCPClass;
  '8920/tcp'?: The8192TCPClass;
  '81/tcp'?: The8192TCPClass;
  '8191/tcp'?: The8192TCPClass;
  '8192/tcp'?: The8192TCPClass;
}

export interface The8192TCPClass {}

export interface Healthcheck {
  Test: string[];
  Interval: number;
  Timeout: number;
  StartPeriod?: number;
  Retries?: number;
}

export interface Labels {
  'com.docker.compose.config-hash': string;
  'com.docker.compose.container-number': string;
  'com.docker.compose.depends_on': COMDockerComposeDependsOn;
  'com.docker.compose.image': string;
  'com.docker.compose.oneoff': 'False';
  'com.docker.compose.project': string;
  'com.docker.compose.project.config_files': string;
  'com.docker.compose.project.working_dir': string;
  'com.docker.compose.replace'?: string;
  'com.docker.compose.service': string;
  'com.docker.compose.version': '2.27.1';
  maintainer?: string;
  build_version?: string;
  'org.opencontainers.image.authors'?: string;
  'org.opencontainers.image.created'?: Date;
  'org.opencontainers.image.description'?: string;
  'org.opencontainers.image.documentation'?: string;
  'org.opencontainers.image.licenses'?: string;
  'org.opencontainers.image.ref.name'?: string;
  'org.opencontainers.image.revision'?: string;
  'org.opencontainers.image.source'?: string;
  'org.opencontainers.image.title'?: string;
  'org.opencontainers.image.url'?: string;
  'org.opencontainers.image.vendor'?: string;
  'org.opencontainers.image.version'?: string;
  'io.hass.arch'?: string;
  'io.hass.base.arch'?: string;
  'io.hass.base.image'?: string;
  'io.hass.base.name'?: string;
  'io.hass.base.version'?: string;
  'io.hass.type'?: string;
  'io.hass.version'?: string;
  'org.label-schema.cmd'?: string;
  'org.label-schema.description'?: string;
  'org.label-schema.license'?: string;
  'org.label-schema.name'?: string;
  'org.label-schema.schema-version'?: string;
  'org.label-schema.url'?: string;
  'org.label-schema.vcs-url'?: string;
}

export enum COMDockerComposeDependsOn {
  Empty = '',
  PrometheusServiceStartedFalse = 'prometheus:service_started:false',
  RedisServiceStartedFalse = 'redis:service_started:false',
}

export enum User {
  Empty = '',
  Flaresolverr = 'flaresolverr',
  Nobody = 'nobody',
  Root = 'root',
}

export interface Volumes {
  '/config'?: The8192TCPClass;
  '/prometheus'?: The8192TCPClass;
  '/data'?: The8192TCPClass;
  '/etc/letsencrypt'?: The8192TCPClass;
  '/var/lib/letsencrypt'?: The8192TCPClass;
  '/cache'?: The8192TCPClass;
}

export interface GraphDriver {
  Data: Data;
  Name: 'overlay2';
}

export interface Data {
  LowerDir: string;
  MergedDir: string;
  UpperDir: string;
  WorkDir: string;
}

export interface HostConfig {
  Binds: string[] | null;
  ContainerIDFile: string;
  LogConfig: LogConfig;
  NetworkMode: string;
  PortBindings: Port;
  RestartPolicy: RestartPolicy;
  AutoRemove: boolean;
  VolumeDriver: string;
  VolumesFrom: null;
  ConsoleSize: number[];
  CapAdd: null;
  CapDrop: null;
  CgroupnsMode: 'private';
  Dns: any[];
  DnsOptions: any[];
  DnsSearch: any[];
  ExtraHosts: any[];
  GroupAdd: null;
  IpcMode: 'private';
  Cgroup: string;
  Links: null;
  OomScoreAdj: number;
  PidMode: string;
  Privileged: boolean;
  PublishAllPorts: boolean;
  ReadonlyRootfs: boolean;
  SecurityOpt: string[] | null;
  UTSMode: string;
  UsernsMode: string;
  ShmSize: number;
  Runtime: 'runc';
  Isolation: string;
  CpuShares: number;
  Memory: number;
  NanoCpus: number;
  CgroupParent: string;
  BlkioWeight: number;
  BlkioWeightDevice: null;
  BlkioDeviceReadBps: null;
  BlkioDeviceWriteBps: null;
  BlkioDeviceReadIOps: null;
  BlkioDeviceWriteIOps: null;
  CpuPeriod: number;
  CpuQuota: number;
  CpuRealtimePeriod: number;
  CpuRealtimeRuntime: number;
  CpusetCpus: string;
  CpusetMems: string;
  Devices: Device[] | null;
  DeviceCgroupRules: null;
  DeviceRequests: null;
  MemoryReservation: number;
  MemorySwap: number;
  MemorySwappiness: null;
  OomKillDisable: null;
  PidsLimit: null;
  Ulimits: null;
  CpuCount: number;
  CpuPercent: number;
  IOMaximumIOps: number;
  IOMaximumBandwidth: number;
  MaskedPaths: MaskedPath[] | null;
  ReadonlyPaths: ReadonlyPath[] | null;
  Mounts?: HostConfigMount[];
}

export interface Device {
  PathOnHost: string;
  PathInContainer: string;
  CgroupPermissions: string;
}

export interface LogConfig {
  Type: 'json-file';
  Config: The8192TCPClass;
}

export enum MaskedPath {
  ProcACPI = '/proc/acpi',
  ProcAsound = '/proc/asound',
  ProcKcore = '/proc/kcore',
  ProcKeys = '/proc/keys',
  ProcLatencyStats = '/proc/latency_stats',
  ProcSCSI = '/proc/scsi',
  ProcSchedDebug = '/proc/sched_debug',
  ProcTimerList = '/proc/timer_list',
  ProcTimerStats = '/proc/timer_stats',
  SysDevicesVirtualPowercap = '/sys/devices/virtual/powercap',
  SysFirmware = '/sys/firmware',
}

export interface HostConfigMount {
  Type: MountType;
  Source: string;
  Target: string;
}

export enum MountType {
  Bind = 'bind',
  Volume = 'volume',
}

export interface Port {
  '3000/tcp'?: The1900UDPElement[];
  '9100/tcp'?: The1900UDPElement[];
  '6881/tcp'?: The1900UDPElement[];
  '6881/udp'?: The1900UDPElement[];
  '8080/tcp'?: The1900UDPElement[];
  '9090/tcp'?: The1900UDPElement[];
  '9469/tcp'?: The1900UDPElement[];
  '6379/tcp'?: The1900UDPElement[];
  '9374/tcp'?: The1900UDPElement[];
  '443/tcp'?: The1900UDPElement[];
  '7878/tcp'?: The1900UDPElement[];
  '8989/tcp'?: The1900UDPElement[];
  '6767/tcp'?: The1900UDPElement[];
  '9696/tcp'?: The1900UDPElement[];
  '1900/udp'?: The1900UDPElement[];
  '7359/udp'?: The1900UDPElement[];
  '8096/tcp'?: The1900UDPElement[];
  '8920/tcp'?: The1900UDPElement[];
  '80/tcp'?: The1900UDPElement[];
  '81/tcp'?: The1900UDPElement[];
  '8191/tcp'?: The1900UDPElement[];
  '8192/tcp'?: null;
}

export interface The1900UDPElement {
  HostIp: HostIP;
  HostPort: string;
}

export enum HostIP {
  Empty = '',
  HostIP = '::',
  The0000 = '0.0.0.0',
}

export enum ReadonlyPath {
  ProcBus = '/proc/bus',
  ProcFS = '/proc/fs',
  ProcIRQ = '/proc/irq',
  ProcSys = '/proc/sys',
  ProcSysrqTrigger = '/proc/sysrq-trigger',
}

export interface RestartPolicy {
  Name: Name;
  MaximumRetryCount: number;
}

export enum Name {
  No = 'no',
  UnlessStopped = 'unless-stopped',
}

export interface DockerStatsInterfaceMount {
  Type: MountType;
  Source: string;
  Destination: string;
  Mode: ModeEnum;
  RW: boolean;
  Propagation: Propagation;
  Name?: string;
  Driver?: string;
}

export enum ModeEnum {
  Empty = '',
  Ro = 'ro',
  Rw = 'rw',
  Z = 'z',
}

export enum Propagation {
  Empty = '',
  Rprivate = 'rprivate',
  Rslave = 'rslave',
}

export interface NetworkSettings {
  Bridge: string;
  SandboxID: string;
  SandboxKey: string;
  Ports: Port;
  HairpinMode: boolean;
  LinkLocalIPv6Address: string;
  LinkLocalIPv6PrefixLen: number;
  SecondaryIPAddresses: null;
  SecondaryIPv6Addresses: null;
  EndpointID: string;
  Gateway: string;
  GlobalIPv6Address: string;
  GlobalIPv6PrefixLen: number;
  IPAddress: string;
  IPPrefixLen: number;
  IPv6Gateway: string;
  MacAddress: string;
  Networks: { any: NetworkConfig };
}

export interface NetworkConfig {
  IPAMConfig: null;
  Links: null;
  Aliases: string[] | null;
  MacAddress: string;
  DriverOpts: null;
  NetworkID: string;
  EndpointID: string;
  Gateway: string;
  IPAddress: string;
  IPPrefixLen: number;
  IPv6Gateway: string;
  GlobalIPv6Address: string;
  GlobalIPv6PrefixLen: number;
  DNSNames: string[] | null;
}

export interface State {
  Status: Status;
  Running: boolean;
  Paused: boolean;
  Restarting: boolean;
  OOMKilled: boolean;
  Dead: boolean;
  Pid: number;
  ExitCode: number;
  Error: string;
  StartedAt: Date;
  FinishedAt: Date;
  Health?: Health;
}

export interface Health {
  Status: string;
  FailingStreak: number;
  Log: Log[];
}

export interface Log {
  Start: Date;
  End: Date;
  ExitCode: number;
  Output: Output;
}

export enum Output {
  Empty = '',
  Healthy = 'Healthy',
}

export enum Status {
  Exited = 'exited',
  Running = 'running',
}
