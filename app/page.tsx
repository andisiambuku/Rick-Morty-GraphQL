'use client'

import { Character, CharacterQueryResponse } from "@/types/types";
import Image from 'next/image'
import { characterQuery } from '@/queries/characterQuery';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useSuspenseQuery } from "@apollo/client/react";

export default function Home() {

  const { data } = useSuspenseQuery<CharacterQueryResponse>(characterQuery);

  return(
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.characters.results.map((character:Character, index:number) =>  (
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
    </div>
  )
}






// import { getClient } from "./ApolloClient";
// import Image from 'next/image'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { characterQuery } from "@/queries/characterQuery";
// import { Character, CharacterQueryResponse } from "@/types/types";



// export default async function Home() {
//   const { data } = await getClient().query<CharacterQueryResponse>({ query: characterQuery });

//   return (
//     <div className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {data.characters.results.map((character:Character, index:number) =>  (
//           <Card key={index} className="max-w-sm mx-auto my-4">
//             <CardHeader className="relative">
//               <Image src={character.image} width={300} height={300} alt={character.name} />
//               <Button className="absolute right-2 top-2">{character.status}</Button>
//               <CardTitle>{character.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <p>{character.species}</p>
//               <p>Origin: {character.origin.name}</p>
//               <p>Location: {character.location.name}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
