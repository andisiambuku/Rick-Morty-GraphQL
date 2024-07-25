import { gql } from "@apollo/client";
import { getClient } from "../ApolloClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.locations.results.map((location:any, index:any) => (
          <Card key={index} className="max-w-sm mx-auto my-4">
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Type: {location.type}</p>
              <p>Dimension: {location.dimension}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
