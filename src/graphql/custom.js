export const listTransactionsCustom = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        due_date
        fine
        status
        bookitemID
        createdAt
        updatedAt
        owner
        book {
          book {
            id
            title
            subject
            publisher
            language
            edition
            Authors {
              items {
                author {
                  id
                  name
                }
              }
            }
          }
        }
      }
      nextToken
    }
  }
`;
