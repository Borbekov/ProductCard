export const priceFormatter = (amount: number, currencyCode: string) => {
    const localeMap = {
        RUB: "ru-RU",
        USD: "en-US",
        EUR: "de-DE",
    }

    return new Intl.NumberFormat(localeMap[currencyCode as keyof typeof localeMap], {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(amount / 100)
}