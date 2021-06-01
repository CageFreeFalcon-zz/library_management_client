/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification {
    onCreateUserNotification {
      id
      title
      subtitle
      content
      img_path
      userna
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification {
    onUpdateUserNotification {
      id
      title
      subtitle
      content
      img_path
      userna
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification {
    onDeleteUserNotification {
      id
      title
      subtitle
      content
      img_path
      userna
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

export const onCreateAdminNotification = /* GraphQL */ `
  subscription OnCreateAdminNotification {
    onCreateAdminNotification {
      id
      type
      title
      subtitle
      content
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAdminNotification = /* GraphQL */ `
  subscription OnUpdateAdminNotification {
    onUpdateAdminNotification {
      id
      type
      title
      subtitle
      content
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAdminNotification = /* GraphQL */ `
  subscription OnDeleteAdminNotification {
    onDeleteAdminNotification {
      id
      type
      title
      subtitle
      content
      data
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
      id
      isbn
      title
      subject
      publisher
      language
      edition
      no_of_pages
      copies_present
      copies_issued
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        nextToken
        startedAt
      }
      Authors {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
      id
      isbn
      title
      subject
      publisher
      language
      edition
      no_of_pages
      copies_present
      copies_issued
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        nextToken
        startedAt
      }
      Authors {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
      id
      isbn
      title
      subject
      publisher
      language
      edition
      no_of_pages
      copies_present
      copies_issued
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        nextToken
        startedAt
      }
      Authors {
        nextToken
        startedAt
      }
    }
  }
`;

export const onCreateBookItem = /* GraphQL */ `
  subscription OnCreateBookItem {
    onCreateBookItem {
      id
      price
      status
      added_on
      rackID
      bookID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateBookItem = /* GraphQL */ `
  subscription OnUpdateBookItem {
    onUpdateBookItem {
      id
      price
      status
      added_on
      rackID
      bookID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteBookItem = /* GraphQL */ `
  subscription OnDeleteBookItem {
    onDeleteBookItem {
      id
      price
      status
      added_on
      rackID
      bookID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Transactions {
        nextToken
        startedAt
      }
    }
  }
`;

export const onCreateRack = /* GraphQL */ `
  subscription OnCreateRack {
    onCreateRack {
      id
      number
      location
      recently_used
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateRack = /* GraphQL */ `
  subscription OnUpdateRack {
    onUpdateRack {
      id
      number
      location
      recently_used
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteRack = /* GraphQL */ `
  subscription OnDeleteRack {
    onDeleteRack {
      id
      number
      location
      recently_used
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      BookItems {
        nextToken
        startedAt
      }
    }
  }
`;

export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      books {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      books {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      books {
        nextToken
        startedAt
      }
    }
  }
`;

export const onCreateBarcode = /* GraphQL */ `
  subscription OnCreateBarcode {
    onCreateBarcode {
      id
      code
      status
      created_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Book {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateBarcode = /* GraphQL */ `
  subscription OnUpdateBarcode {
    onUpdateBarcode {
      id
      code
      status
      created_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Book {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteBarcode = /* GraphQL */ `
  subscription OnDeleteBarcode {
    onDeleteBarcode {
      id
      code
      status
      created_at
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Book {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;

export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
      id
      card_number
      img_path
      status
      issued_on
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
      id
      card_number
      img_path
      status
      issued_on
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
      id
      card_number
      img_path
      status
      issued_on
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction {
    onCreateTransaction {
      id
      issue_date
      due_date
      status
      bookitemID
      Username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction {
    onUpdateTransaction {
      id
      issue_date
      due_date
      status
      bookitemID
      Username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction {
    onDeleteTransaction {
      id
      issue_date
      due_date
      status
      bookitemID
      Username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;

export const onCreateBookAuthor = /* GraphQL */ `
  subscription OnCreateBookAuthor {
    onCreateBookAuthor {
      id
      bookID
      authorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      book {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      author {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateBookAuthor = /* GraphQL */ `
  subscription OnUpdateBookAuthor {
    onUpdateBookAuthor {
      id
      bookID
      authorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      book {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      author {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteBookAuthor = /* GraphQL */ `
  subscription OnDeleteBookAuthor {
    onDeleteBookAuthor {
      id
      bookID
      authorID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      book {
        id
        isbn
        title
        subject
        publisher
        language
        edition
        no_of_pages
        copies_present
        copies_issued
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      author {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
