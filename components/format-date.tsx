import { PropsWithChildren } from "react";

export interface DateProps {
  date: string;
}

export default function FormatDate({ date }: PropsWithChildren<DateProps>) {
  const dateString = new Date(date)
    .toDateString()
    .split(" ")
    .slice(1)
    .join(" ");

  return <>{dateString}</>;
}
