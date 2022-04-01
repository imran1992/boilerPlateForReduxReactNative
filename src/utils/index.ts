const imageProvide = (currency: string) => ({
  uri: `https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@d5c68edec1f5eaec59ac77ff2b48144679cebca1/128/color/${currency.toLowerCase()}.png`,
});

export {imageProvide};
