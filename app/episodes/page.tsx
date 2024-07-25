// import { gql } from "@apollo/client";
// import { getClient } from "../ApolloClient";
// import Link from "next/link";


// const episodeQuery = gql`
// query {
//   episodes {
//     results {
//       name,
//       air_date,
//       episode
//     }
//   }
// }
// `;

// export default async function Episodes() {
//   const { data } = await getClient().query({ query: episodeQuery });
// //   console.log(data)

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-between p-24">
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   );
// }
// pages/episodes.tsx
import { gql } from "@apollo/client";
import { getClient } from "../ApolloClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const episodesQuery = gql`
  query {
    episodes {
      results {
        name
        air_date
        episode
      }
    }
  }
`;

export default async function Episodes() {
  const { data } = await getClient().query({ query: episodesQuery });

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.episodes.results.map((episode:any, index:any) => (
          <Card key={index} className="max-w-sm mx-auto my-4">
            <CardHeader>
              <CardTitle>{episode.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Air Date: {episode.air_date}</p>
              <p>Episode: {episode.episode}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
