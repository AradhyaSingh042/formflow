import { FormStep } from "@/types/enum";
import { MultiFormProps } from "@/types/interface";
import React from "react";
import PersonalInfo from "../steps/personal-info";
import AddressDetails from "../steps/address-details";
import Preferences from "../steps/preferences";
import Review from "../steps/review";

const MultiStepForm: React.FC<MultiFormProps> = ({ step }) => {
  switch (step) {
    case FormStep.PersonalInfo:
      return <PersonalInfo />;
      break;
    case FormStep.Address:
      return <AddressDetails />;
      break;
    case FormStep.Preferences:
      return <Preferences />;
      break;
    case FormStep.Review:
      return <Review />;
  }
};

export default MultiStepForm;
