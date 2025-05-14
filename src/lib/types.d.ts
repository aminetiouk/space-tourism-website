declare module '*.json' {
  const value: any;
  export default value;
}

export interface TCrewMember {
  name: string;
  role: string;
  bio: string;
  images: {
    webp: string;
    png: string;
  };
}

export interface TDestination {
  name: string;
  description: string;
  distance: string;
  travel: string;
  images: {
    png: string;
    webp: string;
  };
}
