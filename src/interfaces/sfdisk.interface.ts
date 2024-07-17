export interface SFDiskOutputInterface {
  disk:                 string;
  disk_size:            string;
  bytes:                number;
  sectors:              number;
  units:                "sectors of 1 * 512 = 512 bytes";
  logical_sector_size:  number;
  physical_sector_size: number;
  min_io_size:          number;
  optimal_io_size:      number;
  disk_model?:          string;
  disk_label_type?:     string;
  disk_identifier?:     string;
  partitions?:          Partition[];
}

export interface Partition {
  device:  string;
  start:   number;
  end:     number;
  sectors: number;
  size:    string;
  type:    string;
}
