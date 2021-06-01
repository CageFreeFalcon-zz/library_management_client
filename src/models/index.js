// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const BookStatus = {
  ISSUED: "ISSUED",
  NOTISSUED: "NOTISSUED",
  LOST: "LOST",
};

const BarcodeStatus = {
  USED: "USED",
  UNUSED: "UNUSED",
};

const CardStatus = {
  ISSUED: "ISSUED",
  DEPRICATED: "DEPRICATED",
};

const {
  UserNotification,
  AdminNotification,
  Book,
  BookItem,
  Transaction,
  BookAuthor,
  Author,
  Rack,
  Barcode,
  Card,
} = initSchema(schema);

export {
  UserNotification,
  AdminNotification,
  Book,
  BookItem,
  Transaction,
  BookAuthor,
  Author,
  Rack,
  Barcode,
  Card,
  BookStatus,
  BarcodeStatus,
  CardStatus,
};
