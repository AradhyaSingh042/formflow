import { AddressInfo, PersonalInfo, PreferenceInfo } from "@/types/interface";
import { create } from "zustand";

type FormInfoStore = {
  personalInfo: PersonalInfo;
  addressInfo: AddressInfo;
  preferenceInfo: PreferenceInfo;
  updatePersonalInfo: (data: PersonalInfo) => void;
  updateAddressInfo: (data: AddressInfo) => void;
  updatePreferenceInfo: (data: PreferenceInfo) => void;
};

export const useFormInfoStore = create<FormInfoStore>((set) => ({
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },

  addressInfo: {
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  },

  preferenceInfo: {
    communicationPreference: {
      email: false,
      sms: false,
      newsletter: false,
    },
    interests: {
      tech: false,
      music: false,
      sports: false,
    },
  },

  updatePersonalInfo: (data) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, ...data },
    })),

  updateAddressInfo: (data) =>
    set((state) => ({
      addressInfo: { ...state.addressInfo, ...data },
    })),

  updatePreferenceInfo: (data) =>
    set((state) => ({
      preferenceInfo: { ...state.preferenceInfo, ...data },
    })),
}));
