export const schema = {
  models: {
    UserNotification: {
      name: "UserNotification",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        subtitle: {
          name: "subtitle",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        content: {
          name: "content",
          isArray: false,
          type: "AWSJSON",
          isRequired: false,
          attributes: [],
        },
        img_path: {
          name: "img_path",
          isArray: false,
          type: "AWSURL",
          isRequired: false,
          attributes: [],
        },
        userna: {
          name: "userna",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "UserNotifications",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    AdminNotification: {
      name: "AdminNotification",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        type: {
          name: "type",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        subtitle: {
          name: "subtitle",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        content: {
          name: "content",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        data: {
          name: "data",
          isArray: false,
          type: "AWSJSON",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "AdminNotifications",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Book: {
      name: "Book",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        isbn: {
          name: "isbn",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        title: {
          name: "title",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        subject: {
          name: "subject",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        publisher: {
          name: "publisher",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        language: {
          name: "language",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        edition: {
          name: "edition",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        no_of_pages: {
          name: "no_of_pages",
          isArray: false,
          type: "Int",
          isRequired: false,
          attributes: [],
        },
        copies_present: {
          name: "copies_present",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        copies_issued: {
          name: "copies_issued",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        BookItems: {
          name: "BookItems",
          isArray: true,
          type: {
            model: "BookItem",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "bookID",
          },
        },
        Authors: {
          name: "Authors",
          isArray: true,
          type: {
            model: "BookAuthor",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "book",
          },
        },
      },
      syncable: true,
      pluralName: "Books",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    BookItem: {
      name: "BookItem",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        price: {
          name: "price",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "BookStatus",
          },
          isRequired: true,
          attributes: [],
        },
        added_on: {
          name: "added_on",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        rackID: {
          name: "rackID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        Transactions: {
          name: "Transactions",
          isArray: true,
          type: {
            model: "Transaction",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "bookitemID",
          },
        },
        bookID: {
          name: "bookID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "BookItems",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byRack",
            fields: ["rackID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byBook",
            fields: ["bookID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Transaction: {
      name: "Transaction",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        issue_date: {
          name: "issue_date",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        due_date: {
          name: "due_date",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        status: {
          name: "status",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        bookitemID: {
          name: "bookitemID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        Username: {
          name: "Username",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "Transactions",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byBookItem",
            fields: ["bookitemID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    BookAuthor: {
      name: "BookAuthor",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        book: {
          name: "book",
          isArray: false,
          type: {
            model: "Book",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetName: "bookID",
          },
        },
        author: {
          name: "author",
          isArray: false,
          type: {
            model: "Author",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetName: "authorID",
          },
        },
      },
      syncable: true,
      pluralName: "BookAuthors",
      attributes: [
        {
          type: "model",
          properties: {
            queries: null,
          },
        },
        {
          type: "key",
          properties: {
            name: "byBook",
            fields: ["bookID", "authorID"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byAuthor",
            fields: ["authorID", "bookID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Author: {
      name: "Author",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
        books: {
          name: "books",
          isArray: true,
          type: {
            model: "BookAuthor",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "author",
          },
        },
      },
      syncable: true,
      pluralName: "Authors",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Rack: {
      name: "Rack",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        number: {
          name: "number",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        location: {
          name: "location",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        recently_used: {
          name: "recently_used",
          isArray: false,
          type: "Boolean",
          isRequired: false,
          attributes: [],
        },
        BookItems: {
          name: "BookItems",
          isArray: true,
          type: {
            model: "BookItem",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: "rackID",
          },
        },
      },
      syncable: true,
      pluralName: "Racks",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Barcode: {
      name: "Barcode",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        code: {
          name: "code",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "BarcodeStatus",
          },
          isRequired: true,
          attributes: [],
        },
        created_at: {
          name: "created_at",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        Book: {
          name: "Book",
          isArray: false,
          type: {
            model: "Book",
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetName: "barcodeBookId",
          },
        },
      },
      syncable: true,
      pluralName: "Barcodes",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    Card: {
      name: "Card",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        card_number: {
          name: "card_number",
          isArray: false,
          type: "Int",
          isRequired: true,
          attributes: [],
        },
        img_path: {
          name: "img_path",
          isArray: false,
          type: "AWSURL",
          isRequired: true,
          attributes: [],
        },
        status: {
          name: "status",
          isArray: false,
          type: {
            enum: "CardStatus",
          },
          isRequired: true,
          attributes: [],
        },
        issued_on: {
          name: "issued_on",
          isArray: false,
          type: "AWSDate",
          isRequired: true,
          attributes: [],
        },
        username: {
          name: "username",
          isArray: false,
          type: "String",
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: "Cards",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {
    BookStatus: {
      name: "BookStatus",
      values: ["ISSUED", "NOTISSUED", "LOST"],
    },
    BarcodeStatus: {
      name: "BarcodeStatus",
      values: ["USED", "UNUSED"],
    },
    CardStatus: {
      name: "CardStatus",
      values: ["ISSUED", "DEPRICATED"],
    },
  },
  nonModels: {},
  version: "cc13fc9e49e46ac1ad9bddd665a0c095",
};
