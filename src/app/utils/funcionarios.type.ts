export interface FuncionarioProps{
    id: string;
    name: string;
    phone: string;
    email: string;
    cargo: string;
    address: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    userId: string | null;
  }