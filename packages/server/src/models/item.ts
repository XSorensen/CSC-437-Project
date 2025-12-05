export interface Item {
    id: string,
    name: string,
    description: string,
    item_type: string,
    loadout_slots: string[],
    rarity: string,
    value: number,
    workbench: string,
    flavor_text: string
}