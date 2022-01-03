export class Stack {
  top = -1
  items = {}

  push (item: string): typeof this.items {
    this.top += 1
    // @ts-expect-error
    this.items[this.top] = item

    // @ts-expect-error
    return this.items[this.top]
  }

  peek (): typeof this.items {
    // @ts-expect-error
    return this.items[this.top]
  }

  pop (): typeof this.items {
    // @ts-expect-error
    const removedItem = this.items[this.top]
    // @ts-expect-error
    delete this.items[this.top]
    this.top--
    return removedItem
  }
}
