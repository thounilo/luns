export default luns;
/**
 * @param opts.count   `number` of characters in the string
 * @param opts.include `string` [l]owercase, [u]ppercase, [n]umbers, [s]pecial
 * @param opts.prefix  `string` to prepend to the result
 */
export function luns(opts?: Partial<Opts>) {
  try {
    if (typeof opts !== "object") opts = {};

    opts.count   ??= 10;
    opts.include ??= "lun";
    opts.prefix  ??= "";

    const charsMap: Record<string, string> = {
      l: "abcdefghijklmnopqrstuvwxyz",
      u: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      n: "0123456789",
      s: "-_",
    };

    const chars = [...opts.include].map((char) => charsMap[char]).join("");

    let result = "";

    while (opts.count--) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return `${opts.prefix}${result}`;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("luns: Something went wrong, please check your input");
    }
    throw error;
  }
}

type Opts = {
  count: number;
  include: string;
  prefix: string;
};
