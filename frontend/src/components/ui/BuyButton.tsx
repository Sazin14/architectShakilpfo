"use client";
import { useState } from "react";
import { Button } from "./Button";
import { usd } from "@/lib/utils";

/** Demo only — checkout (payment + secure PDF delivery) is wired up with the backend. */
export default function BuyButton({ price }: { price: number }) {
  const [note, setNote] = useState(false);
  return (
    <div>
      <Button variant="dark" onClick={() => setNote(true)}>Buy PDF — {usd(price)}</Button>
      {note && <p className="mt-3 text-xs text-g500">Checkout will be enabled once the backend is connected.</p>}
    </div>
  );
}
