//server components way for fetching for graphql

// import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache({ addTypename: false }),
//     link: new HttpLink({
//       uri: "https://rickandmortyapi.com/graphql",
//     }),

//   });
// });