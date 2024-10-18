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

export interface Cities {
  id: number;
  name: string;
  code: string;
  state_id: number;
}

export interface Term {
  id: number;
  name: string;
  days: number;
}
