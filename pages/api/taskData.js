import { rowTaskData } from "../../data/rowTaskData";

export default function handler(req, res) {
  res.status(200).json({ data: rowTaskData });
}
