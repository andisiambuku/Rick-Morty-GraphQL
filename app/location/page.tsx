import { gql } from "@apollo/client";
import { getClient } from "../ApolloClient";
import Link from "next/link";


const locationQuery = gql`
query {
  locations {
    results {
      name,
      type,
      dimension
    }
  }
}
`;

export default async function Episodes() {
  const { data } = await getClient().query({ query: locationQuery });
//   console.log(data)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
