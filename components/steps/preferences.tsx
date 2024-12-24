import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Separator } from "../ui/separator";
import { useForm, useWatch } from "react-hook-form";
import { Input } from "../ui/input";
import { useFormInfoStore } from "@/store/store";

const Preferences = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();

  const preferenceInfoValues = useWatch({
    control,
    name: [
      "email-notification",
      "sms-notification",
      "newsletter",
      "tech",
      "music",
      "sports",
    ],
  });

  const preferenceInfo = useFormInfoStore((state) => state.preferenceInfo);

  const updatePreferenceInfo = useFormInfoStore(
    (state) => state.updatePreferenceInfo
  );

  useEffect(() => {
    updatePreferenceInfo({
      communicationPreference: {
        email: preferenceInfoValues[0],
        sms: preferenceInfoValues[1],
        newsletter: preferenceInfoValues[2],
      },

      interests: {
        tech: preferenceInfoValues[3],
        music: preferenceInfoValues[4],
        sports: preferenceInfoValues[5],
      },
    });
  }, [preferenceInfoValues, updatePreferenceInfo]);

  return (
    <>
      <form className="form flex flex-col gap-6 mt-4">
        <h4 className="text-xl font-semibold tracking-wide">Preferences</h4>
        <Separator className="-mt-2" />

        <h5 className="text-lg font-semibold tracking-wide">
          Communication Preferences
        </h5>

        <div className="top-container flex flex-col space-y-3">
          <div className="field-1 -mt-2 flex items-center space-x-2">
            <Input
              id="email-notification"
              type="checkbox"
              className="w-4 h-4"
              {...register("email-notification")}
            />
            <Label
              htmlFor="email-notification"
              className="text-zinc-700 dark:text-zinc-400 cursor-pointer"
            >
              Email notifications
            </Label>
          </div>

          <div className="field-2 flex items-center space-x-2">
            <Input
              id="sms-notification"
              type="checkbox"
              className="w-4 h-4"
              {...register("sms-notification")}
            />
            <Label
              htmlFor="sms-notification"
              className="text-zinc-700 dark:text-zinc-400 cursor-pointer"
            >
              SMS notifications
            </Label>
          </div>

          <div className="field-3 flex items-center space-x-2">
            <Input
              id="newsletter"
              type="checkbox"
              className="w-4 h-4"
              {...register("newsletter")}
            />
            <Label
              htmlFor="newsletter"
              className="text-zinc-700 dark:text-zinc-400 cursor-pointer"
            >
              Subscribe to our Newsletter
            </Label>
          </div>
        </div>

        <Separator className="mt-2" />

        <h5 className="text-lg font-semibold tracking-wide">Interests</h5>

        <div className="bottom-container flex flex-col space-y-3">
          <div className="field-4 -mt-2 flex items-center space-x-2">
            <Input
              id="tech"
              type="checkbox"
              className="w-4 h-4"
              {...register("tech")}
            />
            <Label
              htmlFor="tech"
              className="text-zinc-700 dark:text-zinc-400 cursor-pointer"
            >
              Technology
            </Label>
          </div>

          <div className="field-5 flex items-center space-x-2">
            <Input
              id="music"
              type="checkbox"
              className="w-4 h-4"
              {...register("music")}
            />
            <Label
              htmlFor="music"
              className="text-zinc-700 dark:text-zinc-400 cursor-pointer"
            >
              Music
            </Label>
          </div>

          <div className="field-6 flex items-center space-x-2">
            <Input
              id="sports"
              type="checkbox"
              className="w-4 h-4"
              {...register("sports")}
            />
            <Label
              htmlFor="sports"
              className="text-zinc-700 dark:text-zinc-400 cursor-pointer"
            >
              Sports
            </Label>
          </div>
        </div>
      </form>
    </>
  );
};

export default Preferences;
