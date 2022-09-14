import {
  CURRENCY_DATA_TYPING,
  DEFAULT_CURRENCY_TYPING,
  TYPING_CURRENCY_NAME,
  TYPING_INPUT_VALUE
} from "./actionTypes";

export const actionAmount = (payload) => ({
  type: TYPING_INPUT_VALUE,
  payload,
});

export const actionDefaultCurrency = (payload) => ({
  type: DEFAULT_CURRENCY_TYPING,
  payload,
});

export const actionCurrencyData = (payload) => ({
  type: CURRENCY_DATA_TYPING,
  payload,
});

export const actionCurrencyTyping = (payload) => ({
  type: TYPING_CURRENCY_NAME,
  payload,
});
