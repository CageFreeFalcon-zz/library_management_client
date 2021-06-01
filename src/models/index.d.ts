import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BookStatus {
  ISSUED = "ISSUED",
  NOTISSUED = "NOTISSUED",
  LOST = "LOST"
}

export enum BarcodeStatus {
  USED = "USED",
  UNUSED = "UNUSED"
}

export enum CardStatus {
  ISSUED = "ISSUED",
  DEPRICATED = "DEPRICATED"
}



export declare class UserNotification {
  readonly id: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly content?: string;
  readonly img_path?: string;
  readonly userna?: string;
  constructor(init: ModelInit<UserNotification>);
  static copyOf(source: UserNotification, mutator: (draft: MutableModel<UserNotification>) => MutableModel<UserNotification> | void): UserNotification;
}

export declare class AdminNotification {
  readonly id: string;
  readonly type?: string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly content?: string;
  readonly data?: string;
  constructor(init: ModelInit<AdminNotification>);
  static copyOf(source: AdminNotification, mutator: (draft: MutableModel<AdminNotification>) => MutableModel<AdminNotification> | void): AdminNotification;
}

export declare class Book {
  readonly id: string;
  readonly isbn: string;
  readonly title: string;
  readonly subject: string;
  readonly publisher: string;
  readonly language: string;
  readonly edition: string;
  readonly no_of_pages?: number;
  readonly copies_present: number;
  readonly copies_issued: number;
  readonly BookItems?: (BookItem | null)[];
  readonly Authors?: (BookAuthor | null)[];
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

export declare class BookItem {
  readonly id: string;
  readonly price: number;
  readonly status: BookStatus | keyof typeof BookStatus;
  readonly added_on: string;
  readonly rackID: string;
  readonly Transactions?: (Transaction | null)[];
  readonly bookID: string;
  constructor(init: ModelInit<BookItem>);
  static copyOf(source: BookItem, mutator: (draft: MutableModel<BookItem>) => MutableModel<BookItem> | void): BookItem;
}

export declare class Transaction {
  readonly id: string;
  readonly issue_date: string;
  readonly due_date: string;
  readonly status: string;
  readonly bookitemID: string;
  readonly Username?: string;
  constructor(init: ModelInit<Transaction>);
  static copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
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
  readonly description?: string;
  readonly books?: (BookAuthor | null)[];
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class Rack {
  readonly id: string;
  readonly number: string;
  readonly location: string;
  readonly recently_used?: boolean;
  readonly BookItems?: (BookItem | null)[];
  constructor(init: ModelInit<Rack>);
  static copyOf(source: Rack, mutator: (draft: MutableModel<Rack>) => MutableModel<Rack> | void): Rack;
}

export declare class Barcode {
  readonly id: string;
  readonly code: string;
  readonly status: BarcodeStatus | keyof typeof BarcodeStatus;
  readonly created_at: string;
  readonly Book?: Book;
  constructor(init: ModelInit<Barcode>);
  static copyOf(source: Barcode, mutator: (draft: MutableModel<Barcode>) => MutableModel<Barcode> | void): Barcode;
}

export declare class Card {
  readonly id: string;
  readonly card_number: number;
  readonly img_path: string;
  readonly status: CardStatus | keyof typeof CardStatus;
  readonly issued_on: string;
  readonly username?: string;
  constructor(init: ModelInit<Card>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}