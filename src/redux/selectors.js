
export const currencySelector = {
  getAmount: (state) => state.currency.amount,
  getCurrencyData: (state) => state.currency.currencyData,
  getActiveCurrency: (state) => state.currency.activeCurrency
};
