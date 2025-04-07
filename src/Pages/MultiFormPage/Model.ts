export interface FormData {
  name: string;
  email: string;
  password: string;
}

export interface StepProps {
  onNext?: () => void;
  onBack?: () => void;
  formData?: FormData;
}

export interface FormData {
  name: string;
  email: string;
  password: string;
  address: string;
  place: number | null;
  postalCode: number | null;
  sendTime: string;
}
