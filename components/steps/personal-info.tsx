import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useForm, useWatch } from "react-hook-form";
import { useFormInfoStore } from "@/store/store";

const PersonalInfo = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();

  const personalInfoValues = useWatch({
    control,
    name: ["name", "email", "phone"],
  });

  const personalInfo = useFormInfoStore((state) => state.personalInfo);

  const updatePersonalInfo = useFormInfoStore(
    (state) => state.updatePersonalInfo
  );

  useEffect(() => {
    updatePersonalInfo({
      name: personalInfoValues[0],
      email: personalInfoValues[1],
      phone: personalInfoValues[2],
    });
  }, [personalInfoValues, updatePersonalInfo]);

  return (
    <>
      <form className="form flex flex-col gap-6 mt-4">
        <h4 className="text-xl font-semibold tracking-wide">
          Personal Information
        </h4>
        <Separator className="-mt-2 dark:bg-slate-700" />
        <div className="field-1 flex flex-col gap-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Aradhya Singh"
            className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
            {...register("name", {
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters long",
              },
              maxLength: {
                value: 50,
                message: "Name cannot exceed 50 characters",
              },
            })}
          />

          {errors.name && (
            <span role="alert" className="text-red-500 text-sm">
              {errors.name.message as string}
            </span>
          )}
        </div>

        <div className="field-2 flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            placeholder="aradhya@example.com"
            className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />

          {errors.email && (
            <span role="alert" className="text-red-500 text-sm">
              {errors.email.message as string}
            </span>
          )}
        </div>

        <div className="field-3 flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(+91) 9112345987"
            className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^\(\+?[0-9]{1,3}\)\s?[0-9]{10}$/,
                message: "Enter a valid phone number, e.g., (+91) 9112345987",
              },
            })}
          />

          {errors.phone && (
            <span role="alert" className="text-red-500 text-sm">
              {errors.phone.message as string}
            </span>
          )}
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
