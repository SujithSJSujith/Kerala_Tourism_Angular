// export interface Districts {
//     "id": number,
//     "title": string,
//     "description": string,
//     "image_url": any,
// }


export interface Districts {
    id: number;
    title: string;
    description: string;
    image_url: string;
    tourist_places: {
      name: string;
      description: string;
      image_url: string;
    }[];
  }
