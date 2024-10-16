export interface Holiday {
  id: number;
  date: Date;
  name: string;
  state_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
}

export interface State {
  id: number;
  name: string;
  uf: string;
  region: string;
}
