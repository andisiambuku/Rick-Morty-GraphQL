export interface Character {
    name: string;
    status: string;
    species: string;
    image: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
  }
  
  export interface CharactersData {
    characters: {
      results: Character[];
    };
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