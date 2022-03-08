import { PropsWithChildren } from "react";

export interface DateProps {
  date: string;
}

export default function FormatDate({ date }: PropsWithChildren<DateProps>) {
  let _date: string | string[] = new Date(date).toDateString().split(" ");
  _date = _date.slice(1);
  _date[1] = `${_date[1]},`;
  _date = _date.join(" ");

  return <>{_date}</>;
}
