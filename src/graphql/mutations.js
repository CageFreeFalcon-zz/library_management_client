/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserNotification = /* GraphQL */ `
  mutation CreateUserNotification(
    $input: CreateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    createUserNotification(input: $input, condition: $condition) {
      id
      title
      subtitle
      content
      username
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateUserNotification = /* GraphQL */ `
  mutation UpdateUserNotification(
    $input: UpdateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    updateUserNotification(input: $input, condition: $condition) {
      id
      title
      subtitle
      content
      username
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserNotification = /* GraphQL */ `
  mutation DeleteUserNotification(
    $input: DeleteUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    deleteUserNotification(input: $input, condition: $condition) {
      id
      title
      subtitle
      content
      username
      status
      createdAt
      updatedAt
    }
  }
`;
export const createAdminNotification = /* GraphQL */ `
  mutation CreateAdminNotification(
    $input: CreateAdminNotificationInput!
    $condition: ModelAdminNotificationConditionInput
  ) {
    createAdminNotification(input: $input, condition: $condition) {
      id
      title
      subtitle
      content
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAdminNotification = /* GraphQL */ `
  mutation UpdateAdminNotification(
    $input: UpdateAdminNotificationInput!
    $condition: ModelAdminNotificationConditionInput
  ) {
    updateAdminNotification(input: $input, condition: $condition) {
      id
      title
      subtitle
      content
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAdminNotification = /* GraphQL */ `
  mutation DeleteAdminNotification(
    $input: DeleteAdminNotificationInput!
    $condition: ModelAdminNotificationConditionInput
  ) {
    deleteAdminNotification(input: $input, condition: $condition) {
      id
      title
      subtitle
      content
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
      id
      title
      subject
      publisher
      language
      edition
      copies_present
      copies_issued
      createdAt
      updatedAt
      BookItems {
        nextToken
      }
      Authors {
        nextToken
      }
    }
  }
`;
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
      id
      title
      subject
      publisher
      language
      edition
      copies_present
      copies_issued
      createdAt
      updatedAt
      BookItems {
        nextToken
      }
      Authors {
        nextToken
      }
    }
  }
`;
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
      id
      title
      subject
      publisher
      language
      edition
      copies_present
      copies_issued
      createdAt
      updatedAt
      BookItems {
        nextToken
      }
      Authors {
        nextToken
      }
    }
  }
`;
export const createBookItem = /* GraphQL */ `
  mutation CreateBookItem(
    $input: CreateBookItemInput!
    $condition: ModelBookItemConditionInput
  ) {
    createBookItem(input: $input, condition: $condition) {
      id
      status
      rackID
      bookID
      createdAt
      updatedAt
      book {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
      }
      rack {
        id
        name
        createdAt
        updatedAt
      }
      Transactions {
        nextToken
      }
    }
  }
`;
export const updateBookItem = /* GraphQL */ `
  mutation UpdateBookItem(
    $input: UpdateBookItemInput!
    $condition: ModelBookItemConditionInput
  ) {
    updateBookItem(input: $input, condition: $condition) {
      id
      status
      rackID
      bookID
      createdAt
      updatedAt
      book {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
      }
      rack {
        id
        name
        createdAt
        updatedAt
      }
      Transactions {
        nextToken
      }
    }
  }
`;
export const deleteBookItem = /* GraphQL */ `
  mutation DeleteBookItem(
    $input: DeleteBookItemInput!
    $condition: ModelBookItemConditionInput
  ) {
    deleteBookItem(input: $input, condition: $condition) {
      id
      status
      rackID
      bookID
      createdAt
      updatedAt
      book {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
      }
      rack {
        id
        name
        createdAt
        updatedAt
      }
      Transactions {
        nextToken
      }
    }
  }
`;
export const createRack = /* GraphQL */ `
  mutation CreateRack(
    $input: CreateRackInput!
    $condition: ModelRackConditionInput
  ) {
    createRack(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      BookItems {
        nextToken
      }
    }
  }
`;
export const updateRack = /* GraphQL */ `
  mutation UpdateRack(
    $input: UpdateRackInput!
    $condition: ModelRackConditionInput
  ) {
    updateRack(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      BookItems {
        nextToken
      }
    }
  }
`;
export const deleteRack = /* GraphQL */ `
  mutation DeleteRack(
    $input: DeleteRackInput!
    $condition: ModelRackConditionInput
  ) {
    deleteRack(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      BookItems {
        nextToken
      }
    }
  }
`;
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      books {
        nextToken
      }
    }
  }
`;
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      books {
        nextToken
      }
    }
  }
`;
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      books {
        nextToken
      }
    }
  }
`;
export const createBarcode = /* GraphQL */ `
  mutation CreateBarcode(
    $input: CreateBarcodeInput!
    $condition: ModelBarcodeConditionInput
  ) {
    createBarcode(input: $input, condition: $condition) {
      id
      status
      bookItemID
      createdAt
      updatedAt
      bookItem {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateBarcode = /* GraphQL */ `
  mutation UpdateBarcode(
    $input: UpdateBarcodeInput!
    $condition: ModelBarcodeConditionInput
  ) {
    updateBarcode(input: $input, condition: $condition) {
      id
      status
      bookItemID
      createdAt
      updatedAt
      bookItem {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteBarcode = /* GraphQL */ `
  mutation DeleteBarcode(
    $input: DeleteBarcodeInput!
    $condition: ModelBarcodeConditionInput
  ) {
    deleteBarcode(input: $input, condition: $condition) {
      id
      status
      bookItemID
      createdAt
      updatedAt
      bookItem {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
      }
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      username
      due_date
      fine
      status
      bookitemID
      createdAt
      updatedAt
      book {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      username
      due_date
      fine
      status
      bookitemID
      createdAt
      updatedAt
      book {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      username
      due_date
      fine
      status
      bookitemID
      createdAt
      updatedAt
      book {
        id
        status
        rackID
        bookID
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const createBookAuthor = /* GraphQL */ `
  mutation CreateBookAuthor(
    $input: CreateBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    createBookAuthor(input: $input, condition: $condition) {
      id
      bookID
      authorID
      createdAt
      updatedAt
      book {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
      }
      author {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateBookAuthor = /* GraphQL */ `
  mutation UpdateBookAuthor(
    $input: UpdateBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    updateBookAuthor(input: $input, condition: $condition) {
      id
      bookID
      authorID
      createdAt
      updatedAt
      book {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
      }
      author {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteBookAuthor = /* GraphQL */ `
  mutation DeleteBookAuthor(
    $input: DeleteBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    deleteBookAuthor(input: $input, condition: $condition) {
      id
      bookID
      authorID
      createdAt
      updatedAt
      book {
        id
        title
        subject
        publisher
        language
        edition
        copies_present
        copies_issued
        createdAt
        updatedAt
      }
      author {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
`;
