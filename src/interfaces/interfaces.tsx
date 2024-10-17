export interface Holiday {
  id: number;
  date: string;
  name: string;
  state: string;
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
