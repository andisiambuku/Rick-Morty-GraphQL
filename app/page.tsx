import { gql } from "@apollo/client";
import { getClient } from "./ApolloClient";
import Link from "next/link";


const mixedQuery = gql`
query {
  characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;

export default async function Home() {
  const { data } = await getClient().query({ query: mixedQuery });
  // console.log(data)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}