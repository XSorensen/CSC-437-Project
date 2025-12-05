export interface Trader {
    name: string,
    items: TraderItem[]
}

interface TraderItem {
    id: string,
    trader_price: number
}