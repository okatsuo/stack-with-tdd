export class Stack {
  top = -1
  items = {}

  push(item: string) {
    this.top += 1
    //@ts-expect-error
    this.items[this.top] = item
    //@ts-expect-error
    return this.items[this.top]
  }

  peek() {
    //@ts-expect-error
    return this.items[this.top]
  }

  pop() {
    //@ts-expect-error
    const removedItem = this.items[this.top]
    //@ts-expect-error
    delete this.items[this.top]
    this.top--
    return removedItem
  }
}