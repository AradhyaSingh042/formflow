import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "../ui/separator";

const Review = () => {
  return (
    <>
      <div className="flex flex-col gap-6 mt-4">
        <h4 className="text-xl font-semibold tracking-wide">
          Review Your Information
        </h4>
        <Separator className="-mt-2" />
        <Card className="bg-gray-200 dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="font-semibold text-lg tracking-wider">
              Personal Information
            </CardTitle>
            <Separator className="bg-gray-400 dark:bg-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col -mt-2 gap-2">
              <span>Name: John Doe</span>
              <span>Email: john@example.com</span>
              <span>Phone: (123) 456-7890</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-200 dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="font-semibold text-lg tracking-wider">
              Address
            </CardTitle>
            <Separator className="bg-gray-400 dark:bg-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col -mt-2 gap-2">
              <span>123 Main St</span>
              <span>New York, NY 10001</span>
              <span>United States</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-200 dark:bg-gray-700">
          <CardHeader>
            <CardTitle className="font-semibold text-lg tracking-wider">
              Preferences
            </CardTitle>
            <Separator className="bg-gray-400 dark:bg-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col -mt-2 gap-2">
              <span>Communication: Email notifications</span>
              <span>Interests: Technology, Music</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Review;
