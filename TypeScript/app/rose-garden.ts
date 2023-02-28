export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

enum ItemsNames {
  AGED_BRIE = "Aged Brie",
  SULFURAS = "Sulfuras, Hand of Ragnaros",
  BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert",
}

export class RoseGarden {
  items: Array<Item>;
  bannedItemsToSell = [ItemsNames.SULFURAS.toString()];

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  canModifyQuality(item: Item): boolean {
    return item.quality >= 0 && item.quality <= 50;
  }

  canSellOrModifyItem(item: Item): boolean {
    return !this.bannedItemsToSell.includes(item.name);
  }

  sanitizeQuality(quality: number): number {
    return Math.max(0, Math.min(quality, 50));
  }

  updateQuality(): Item[] {
    // * All this code was builded using TDD

    return this.items.map((item): Item => {
      const canModifyQuality = this.canModifyQuality(item);
      const canSellOrModifyItem = this.canSellOrModifyItem(item);

      if (!canModifyQuality || !canSellOrModifyItem) return item;

      if (
        item.name === ItemsNames.AGED_BRIE ||
        item.name === ItemsNames.BACKSTAGE_PASSES
      ) {
        return {
          ...item,
          quality: this.sanitizeQuality(item.quality + 1),
        };
      }

      // * I think when you say "Once the sell by date has passed" it means that must be '< 0' and not '<= 0' because the 0 means on time to sell
      if (item.sellIn < 0) {
        return { ...item, quality: this.sanitizeQuality(item.quality - 2) };
      } else if (item.sellIn <= 5) {
        // * I think when you say "Quality increases by 3 when there are 5 days or less" it means increase and not decrease
        return { ...item, quality: this.sanitizeQuality(item.quality + 3) };
      } else if (item.sellIn <= 10) {
        // * I think when you say "Quality increases by 2 when there are 10 days or less" it means increase and not decrease
        return { ...item, quality: this.sanitizeQuality(item.quality + 2) };
      }

      return {
        ...item,
        quality: this.sanitizeQuality(item.quality - 1),
        sellIn: item.sellIn - 1,
      };

      // ! When you say "Quality drops to 0 after the concert" i don't know what 'concert' means but i think it means that i have to
      // ! check if the item.name contains the word 'concert', if thats what it means i give you the code commented above
      // * Example code for the concert condition:
      // *   const isConcert = item.name.includes("concert");
      // *   if (isConcert) {
      // *     return { ...item, quality: this.sanitizeQuality(0) };
      // *   }
    });
  }
}
