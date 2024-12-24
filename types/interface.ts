import { FormStep } from "./enum";

export interface MultiFormProps {
  step: FormStep;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface AddressInfo {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PreferenceInfo {
  communicationPreference: {
    email: boolean;
    sms: boolean;
    newsletter: boolean;
  };

  interests: {
    tech: boolean;
    music: boolean;
    sports: boolean;
  };
}
