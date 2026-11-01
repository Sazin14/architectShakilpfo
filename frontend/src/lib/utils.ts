export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
