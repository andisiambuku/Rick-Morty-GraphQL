export interface CharacterQueryResponse {
  characters: {
    results: Character[];
  };
}

export interface Character {
  name: string;
  status: string;
  species: string;
  image: string;
  origin: Origin;
  location: Location;
}

export interface Origin {
  name: string;
}

export interface Location {
  name: string;
}
  
  export interface Episode {
    name: string;
    air_date: string;
    episode: string;
  }
  
  export interface EpisodesData {
    episodes: {
      results: Episode[];
    };
  }

  export interface Location {
    name: string;
    type: string;
    dimension: string;
  }
  
  export interface LocationsData {
    locations: {
      results: Location[];
    };
  }