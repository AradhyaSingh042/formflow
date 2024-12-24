"use client";
import { useEffect } from "react";
import { useFormInfoStore } from "@/store/store";
import { getRandomMockData } from "@/actions/form-update";

const FormUpdater = () => {
  const updatePersonalInfo = useFormInfoStore(
    (state) => state.updatePersonalInfo
  );
  const updateAddressInfo = useFormInfoStore(
    (state) => state.updateAddressInfo
  );
  const updatePreferenceInfo = useFormInfoStore(
    (state) => state.updatePreferenceInfo
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const mockData = getRandomMockData();
      updatePersonalInfo(mockData.personalInfo);
      updateAddressInfo(mockData.addressInfo);
      updatePreferenceInfo(mockData.preferenceInfo);
    }, 1000);

    return () => clearInterval(interval);
  }, [updatePersonalInfo, updateAddressInfo, updatePreferenceInfo]);

  return null;
};

export default FormUpdater;
