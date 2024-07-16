import { gql } from "@apollo/client";
import { getClient } from "./ApolloClient";
import Link from "next/link";

export const dynamic = "force-dynamic";
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const userQuery = gql`
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
  const { data } = await getClient().query({ query: userQuery });
  console.log(data)

  return (
    <div>
      <p>data received during RSC render: {JSON.stringify(data)}</p>
      <p>
        <Link href="/ssr">SSR examples are here</Link>
      </p>
    </div>
  );
}