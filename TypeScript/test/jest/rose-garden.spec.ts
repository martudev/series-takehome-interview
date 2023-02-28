import { RoseGarden } from "@/rose-garden";
import { items, expectedItems } from "../items.mock";

describe("Rose Garden", () => {
  describe("updateQuality function", () => {
    it("Should return ", () => {
      const roseGarden = new RoseGarden(items);
      const newItems = roseGarden.updateQuality();
      expect(newItems).toStrictEqual(expectedItems);
    });
  });
});
