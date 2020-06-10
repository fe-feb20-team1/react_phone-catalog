interface Category {
  title: string;
  backgroundColor: string;
  src: string;
  modelsCount: number;
}

export const categories: Category[] = [
  {
    title: 'Mobile Phones',
    backgroundColor: '#FCDBC1',
    src: './images/image1.png',
    modelsCount: 95,
  },
  {
    title: 'Tablets',
    backgroundColor: '#8D8D92',
    src: './images/image2.png',
    modelsCount: 24,
  },
  {
    title: 'Accesories',
    backgroundColor: '#973D5F',
    src: './images/image3.png',
    modelsCount: 100,
  },
];
