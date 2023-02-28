import { Item } from "../app/rose-garden";

export const items = [
  new Item("+5 Dexterity Vest", 10, 20),
  new Item("Aged Brie", 2, 0),
  new Item("Elixir of the Mongoose", 5, 7),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new Item("Example not tested", 15, 21),
];

const sanitizeExpectedMockTest = (item: Item) =>
  JSON.parse(JSON.stringify(item));

export const expectedItems = [
  sanitizeExpectedMockTest(new Item("+5 Dexterity Vest", 10, 22)),
  sanitizeExpectedMockTest(new Item("Aged Brie", 2, 1)),
  sanitizeExpectedMockTest(new Item("Elixir of the Mongoose", 5, 10)),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Sulfuras, Hand of Ragnaros", -1, 80),
  sanitizeExpectedMockTest(
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 21)
  ),
  sanitizeExpectedMockTest(
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50)
  ),
  sanitizeExpectedMockTest(
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50)
  ),
  sanitizeExpectedMockTest(new Item("Example not tested", 14, 20)),
];
