// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const BookFormat = {
  HARDCOVER: "HARDCOVER",
  PAPPERBACK: "PAPPERBACK",
};

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
  UNISSUED: "UNISSUED",
  DEPRICATED: "DEPRICATED",
};

const Course = {
  BTECH: "BTECH",
  DIPLOMA: "DIPLOMA",
};

const Department = {
  CSE: "CSE",
  ME: "ME",
  CE: "CE",
  EE: "EE",
  ECE: "ECE",
};

const Year = {
  FIRST: "FIRST",
  SECOND: "SECOND",
  THIRD: "THIRD",
  FOURTH: "FOURTH",
};

const UserStatus = {
  UNAPPROVED: "UNAPPROVED",
  APPROVED: "APPROVED",
  SUSPENDED: "SUSPENDED",
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
  User,
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
  User,
  BookFormat,
  BookStatus,
  BarcodeStatus,
  CardStatus,
  Course,
  Department,
  Year,
  UserStatus,
};
