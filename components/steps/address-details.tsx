import React, { useEffect } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { useForm, useWatch } from "react-hook-form";
import { useFormInfoStore } from "@/store/store";

const AddressDetails = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm();

  const addressInfoValues = useWatch({
    control,
    name: ["street", "city", "state", "zip", "country"],
  });

  const addressInfo = useFormInfoStore((state) => state.addressInfo);

  const updateAddressInfo = useFormInfoStore(
    (state) => state.updateAddressInfo
  );

  useEffect(() => {
    updateAddressInfo({
      street: addressInfoValues[0],
      city: addressInfoValues[1],
      state: addressInfoValues[2],
      zip: addressInfoValues[3],
      country: addressInfoValues[4],
    });
  }, [addressInfoValues, updateAddressInfo]);

  return (
    <>
      <form className="form flex flex-col gap-6 mt-4">
        <h4 className="text-xl font-semibold tracking-wide">Address Details</h4>
        <Separator className="-mt-2" />
        <div className="top-container">
          <div className="field-1 flex flex-col gap-2">
            <Label htmlFor="street">Street Address</Label>
            <Input
              id="street"
              placeholder="Gomti Street, Aliganj"
              className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
              {...register("street")}
            />
          </div>
        </div>

        <div className="middle-container w-full flex flex-row gap-7">
          <div className="field-2 flex flex-col gap-2 w-full">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              placeholder="Lucknow"
              className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
              {...register("city")}
            />
          </div>

          <div className="field-3 flex flex-col gap-2 w-full">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              placeholder="Uttar Pradesh"
              className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
              {...register("state")}
            />
          </div>
        </div>

        <div className="bottom-container w-full flex flex-row gap-7">
          <div className="field-4 flex flex-col gap-2 w-full">
            <Label htmlFor="zip">ZIP Code</Label>
            <Input
              id="zip"
              type="number"
              placeholder="226021"
              className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
              {...register("zip")}
            />
          </div>

          <div className="field-5 flex flex-col gap-2 w-full">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="India"
              className="bg-transparent dark:bg-slate-600 dark:border-none dark:placeholder:text-gray-400 dark:text-slate-100"
              {...register("country")}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddressDetails;
