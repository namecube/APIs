export default class Hello {
  // コンストラクタ
  constructor(hello) {
    this.hello = hello;
  }

  /**
   * 挨拶をする
   * @returns {string}
   */
  sayHello() {
    const hello = this.hello;
    console.log(hello);
    return hello;
  }
}
