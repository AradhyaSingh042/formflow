"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "../ui/progress";
import { Button } from "../ui/button";
import { FormStep } from "@/types/enum";
import MultiStepForm from "./multi-step-form";

const Content = () => {
  const [formstep, setFormStep] = useState<FormStep>(1);

  return (
    <>
      <main className="form-container w-full flex justify-center pt-8 pb-12 lg:pt-12 lg:pb-16">
        <div className="card-container w-full md:w-10/12 lg:w-8/12 flex flex-col scale-95 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide dark:text-white">
            FormFlow
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-4 dark:text-slate-400 text-sm sm:text-base lg:text-lg">
            A collaborative multi-step form application built with Next.js and
            Tailwind CSS.
          </p>

          <Card className="w-full bg-gray-50 dark:bg-[#1E293B] mt-6 sm:mt-8 shadow-lg">
            <CardHeader>
              <div className="form-progress flex flex-col gap-3">
                <Progress value={25 * formstep} />
                <ul className="flex flex-row justify-around text-xs sm:text-sm text-gray-600 dark:text-slate-400 tracking-wide items-center">
                  <li>Personal Info</li>
                  <li>Address</li>
                  <li>Preferences</li>
                  <li>Review</li>
                </ul>
              </div>
            </CardHeader>
            <CardContent>
              <MultiStepForm step={formstep} />
            </CardContent>
            <CardFooter>
              <div className="form-navigation w-full flex flex-row mt-2 justify-between items-center">
                <Button
                  className="tracking-wide dark:bg-orange-500 dark:text-white text-xs sm:text-sm lg:text-base"
                  onClick={() => setFormStep(formstep - 1)}
                  disabled={formstep === FormStep.PersonalInfo ? true : false}
                >
                  Previous
                </Button>
                <Button
                  className="bg-teal-600 dark:bg-teal-500 dark:text-white tracking-wide px-3 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-base"
                  onClick={() => setFormStep(formstep + 1)}
                  disabled={formstep === FormStep.Review ? true : false}
                >
                  {formstep === FormStep.Review ? "Submit" : "Next"}
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
};

export default Content;
