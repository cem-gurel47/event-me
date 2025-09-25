export type Event = {
  id: string;
  name: string;
  date: Date;
  price: number;
  category: string;
  description: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};
