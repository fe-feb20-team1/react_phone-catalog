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
    src: 'phones',
    modelsCount: 95,
  },
  {
    title: 'Tablets',
    backgroundColor: '#8D8D92',
    src: 'tablets',
    modelsCount: 24,
  },
  {
    title: 'Accessories',
    backgroundColor: '#973D5F',
    src: 'accessories',
    modelsCount: 100,
  },
];
