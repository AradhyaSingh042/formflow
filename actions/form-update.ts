import { PersonalInfo, AddressInfo, PreferenceInfo } from "@/types/interface";

export const getRandomMockData = () => {
  const randomBool = () => Math.random() < 0.5;
  const randomString = (length: number) =>
    Math.random()
      .toString(36)
      .substring(2, 2 + length);

  const personalInfo: PersonalInfo = {
    name: randomString(8),
    email: `${randomString(5)}@example.com`,
    phone: `+1${Math.floor(1000000000 + Math.random() * 9000000000)}`,
  };

  const addressInfo: AddressInfo = {
    street: `${Math.floor(Math.random() * 1000)} ${randomString(10)} St`,
    city: randomString(6),
    state: randomString(4),
    zip: `${Math.floor(10000 + Math.random() * 90000)}`,
    country: "USA",
  };

  const preferenceInfo: PreferenceInfo = {
    communicationPreference: {
      email: randomBool(),
      sms: randomBool(),
      newsletter: randomBool(),
    },
    interests: {
      tech: randomBool(),
      music: randomBool(),
      sports: randomBool(),
    },
  };

  return { personalInfo, addressInfo, preferenceInfo };
};
