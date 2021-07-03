import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum NotificationStatus {
  UNREAD = "UNREAD",
  READ = "READ"
}

export enum BookStatus {
  NOTISSUED = "NOTISSUED",
  ISSUED = "ISSUED",
  LOST = "LOST"
}

export enum TransactionStatus {
  ISSUED = "ISSUED",
  RETURNED = "RETURNED"
}

export enum BarcodeStatus {
  UNUSED = "UNUSED",
  USED = "USED"
}


export declare class UserNotification {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly content: string;
  readonly username: string;
  readonly status?: NotificationStatus | keyof typeof NotificationStatus;

  constructor(init: ModelInit<UserNotification>);

  static copyOf(source: UserNotification, mutator: (draft: MutableModel<UserNotification>) => MutableModel<UserNotification> | void): UserNotification;
}

export declare class AdminNotification {
  readonly id: string;
  readonly title: string;
  readonly subtitle?: string;
  readonly content: string;
  readonly status?: NotificationStatus | keyof typeof NotificationStatus;

  constructor(init: ModelInit<AdminNotification>);

  static copyOf(source: AdminNotification, mutator: (draft: MutableModel<AdminNotification>) => MutableModel<AdminNotification> | void): AdminNotification;
}

export declare class Book {
  readonly id: string;
  readonly title: string;
  readonly subject: string;
  readonly publisher: string;
  readonly language: string;
  readonly edition: string;
  readonly copies_present?: number;
  readonly copies_issued?: number;
  readonly BookItems?: (BookItem | null)[];
  readonly Authors?: (BookAuthor | null)[];

  constructor(init: ModelInit<Book>);

  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

export declare class BookItem {
  readonly id: string;
  readonly status: BookStatus | keyof typeof BookStatus;
  readonly Transactions?: (Transaction | null)[];
  readonly book?: Book;
  readonly rack?: Rack;

  constructor(init: ModelInit<BookItem>);

  static copyOf(source: BookItem, mutator: (draft: MutableModel<BookItem>) => MutableModel<BookItem> | void): BookItem;
}

export declare class Transaction {
  readonly id: string;
  readonly username: string;
  readonly due_date: string;
  readonly fine?: number;
  readonly status: TransactionStatus | keyof typeof TransactionStatus;
  readonly book?: BookItem;

  constructor(init: ModelInit<Transaction>);

  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

export declare class Rack {
  readonly id: string;
  readonly name: string;
  readonly BookItems?: (BookItem | null)[];

  constructor(init: ModelInit<Rack>);

  static copyOf(source: Rack, mutator: (draft: MutableModel<Rack>) => MutableModel<Rack> | void): Rack;
}

export declare class BookAuthor {
  readonly id: string;
  readonly book: Book;
  readonly author: Author;

  constructor(init: ModelInit<BookAuthor>);

  static copyOf(source: BookAuthor, mutator: (draft: MutableModel<BookAuthor>) => MutableModel<BookAuthor> | void): BookAuthor;
}

export declare class Author {
  readonly id: string;
  readonly name?: string;
  readonly books?: (BookAuthor | null)[];
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class Barcode {
  readonly id: string;
  readonly status: BarcodeStatus | keyof typeof BarcodeStatus;
  readonly bookItem?: BookItem;
  constructor(init: ModelInit<Barcode>);
  static copyOf(source: Barcode, mutator: (draft: MutableModel<Barcode>) => MutableModel<Barcode> | void): Barcode;
}