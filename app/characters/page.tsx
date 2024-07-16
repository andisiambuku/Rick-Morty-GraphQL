import { gql } from "@apollo/client";
import { getClient } from "../ApolloClient";
import Link from "next/link";


const characterQuery = gql`
query {
  characters {

    results {
      name,
      status,
      species,
      image,
      origin {name},
      location {name}
    }
  }
}
`;

export default async function Characters() {
    const { data } = await getClient().query({ query: characterQuery });
    //   console.log(data)

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}