import { DEFAULT_CURRENCY_OPTIONS } from '../constants'

export const useCurrencyFormat = (data: number, options = DEFAULT_CURRENCY_OPTIONS): string => {
    return new Intl.NumberFormat('id-ID', options).format(data);
};