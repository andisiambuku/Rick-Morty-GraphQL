import { gql } from "@apollo/client";
import { getClient } from "./ApolloClient";
import Link from "next/link";
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export const characterQuery = gql`
  query {
    characters {
      results {
        name
        status
        species
        image
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query({ query: characterQuery });
    // console.log(data)

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <p>{JSON.stringify(data)}</p> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.characters.results.map((character:any, index:any) =>  (
          <Card key={index} className="max-w-sm mx-auto my-4">
            <CardHeader className="relative">
              <Image src={character.image} width={300} height={300} alt={character.name} />
              <Button className="absolute right-2 top-2">{character.status}</Button>
              <CardTitle>{character.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{character.species}</p>
              <p>Origin: {character.origin.name}</p>
              <p>Location: {character.location.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
