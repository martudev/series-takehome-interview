// * I think that this file can be do it by my team mates!

import { expect } from "chai";
import { Item, RoseGarden } from "@/rose-garden";

describe("Rose Garden", () => {
  it("should foo", () => {
    const roseGarden = new RoseGarden([new Item("foo", 0, 0)]);
    const items = roseGarden.updateQuality();
    expect(items[0].name).to.equal("fixme");
  });
});
