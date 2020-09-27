export const getMatches = {
  operationName: 'GetMatches',
  query: `
    query GetMatches {
      getMatches{
        id
        date
        story {
          title
        }
        attendees {
          id
        }
      }
    }
  `
}