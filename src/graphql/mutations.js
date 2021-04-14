/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserNotification = /* GraphQL */ `
  mutation CreateUserNotification(
    $input: CreateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    createUserNotification(input: $input, condition: $condition) {
      id
      userID
      title
      subtitle
      content
      img_path
      _version
      _deleted
      _lastChangedAt
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
      userID
      title
      subtitle
      content
      img_path
      _version
      _deleted
      _lastChangedAt
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
      userID
      title
      subtitle
      content
      img_path
      _version
      _deleted
      _lastChangedAt
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
      type
      title
      subtitle
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      type
      title
      subtitle
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      type
      title
      subtitle
      content
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createBookItem = /* GraphQL */ `
  mutation CreateBookItem(
    $input: CreateBookItemInput!
    $condition: ModelBookItemConditionInput
  ) {
    createBookItem(input: $input, condition: $condition) {
      id
      price
      format
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
export const updateBookItem = /* GraphQL */ `
  mutation UpdateBookItem(
    $input: UpdateBookItemInput!
    $condition: ModelBookItemConditionInput
  ) {
    updateBookItem(input: $input, condition: $condition) {
      id
      price
      format
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
export const deleteBookItem = /* GraphQL */ `
  mutation DeleteBookItem(
    $input: DeleteBookItemInput!
    $condition: ModelBookItemConditionInput
  ) {
    deleteBookItem(input: $input, condition: $condition) {
      id
      price
      format
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
export const createRack = /* GraphQL */ `
  mutation CreateRack(
    $input: CreateRackInput!
    $condition: ModelRackConditionInput
  ) {
    createRack(input: $input, condition: $condition) {
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
export const updateRack = /* GraphQL */ `
  mutation UpdateRack(
    $input: UpdateRackInput!
    $condition: ModelRackConditionInput
  ) {
    updateRack(input: $input, condition: $condition) {
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
export const deleteRack = /* GraphQL */ `
  mutation DeleteRack(
    $input: DeleteRackInput!
    $condition: ModelRackConditionInput
  ) {
    deleteRack(input: $input, condition: $condition) {
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
export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createBarcode = /* GraphQL */ `
  mutation CreateBarcode(
    $input: CreateBarcodeInput!
    $condition: ModelBarcodeConditionInput
  ) {
    createBarcode(input: $input, condition: $condition) {
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
export const updateBarcode = /* GraphQL */ `
  mutation UpdateBarcode(
    $input: UpdateBarcodeInput!
    $condition: ModelBarcodeConditionInput
  ) {
    updateBarcode(input: $input, condition: $condition) {
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
export const deleteBarcode = /* GraphQL */ `
  mutation DeleteBarcode(
    $input: DeleteBarcodeInput!
    $condition: ModelBarcodeConditionInput
  ) {
    deleteBarcode(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
      id
      card_number
      img_path
      status
      issued_on
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
      id
      card_number
      img_path
      status
      issued_on
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
      id
      card_number
      img_path
      status
      issued_on
      userID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      issue_date
      due_date
      status
      userID
      bookitemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      issue_date
      due_date
      status
      userID
      bookitemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
      issue_date
      due_date
      status
      userID
      bookitemID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      course
      department
      year
      f_name
      dob
      address
      city
      pincode
      dp_path
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserNotifications {
        nextToken
        startedAt
      }
      Cards {
        nextToken
        startedAt
      }
      Transactions {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      course
      department
      year
      f_name
      dob
      address
      city
      pincode
      dp_path
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserNotifications {
        nextToken
        startedAt
      }
      Cards {
        nextToken
        startedAt
      }
      Transactions {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      course
      department
      year
      f_name
      dob
      address
      city
      pincode
      dp_path
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UserNotifications {
        nextToken
        startedAt
      }
      Cards {
        nextToken
        startedAt
      }
      Transactions {
        nextToken
        startedAt
      }
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
export const updateBookAuthor = /* GraphQL */ `
  mutation UpdateBookAuthor(
    $input: UpdateBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    updateBookAuthor(input: $input, condition: $condition) {
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
export const deleteBookAuthor = /* GraphQL */ `
  mutation DeleteBookAuthor(
    $input: DeleteBookAuthorInput!
    $condition: ModelBookAuthorConditionInput
  ) {
    deleteBookAuthor(input: $input, condition: $condition) {
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
