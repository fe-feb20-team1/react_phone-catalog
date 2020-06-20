export const FilterHotPrice = (goods: Goods[]) => {
  return [...goods]
  .filter(good => good.price && good.discount)
  .sort((a, b) => {
    const aDiscout = (a.discount / 100) * a.price;
    const bDiscout = (b.discount / 100) * b.price;

    return bDiscout - aDiscout;
  })
  .slice(0, 8);
}

export const FilterNewestModels = (goods: Goods[]) => {
  return [...goods]
  .sort((a, b) => {
    const aAge = a.age;
    const bAge = b.age;

    return aAge - bAge;
  })
  .slice(0, 8);
}

