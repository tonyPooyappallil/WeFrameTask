import { rowTaskData } from "../../data/rowTaskData";

export default function handler(req, res) {
  console.log("rowTaskData", rowTaskData);
  res.status(200).json({ data: rowTaskData });
}
