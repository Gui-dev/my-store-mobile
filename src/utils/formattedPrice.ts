import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

export const formattedPrice = (value: number) => {
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

  return price
}
