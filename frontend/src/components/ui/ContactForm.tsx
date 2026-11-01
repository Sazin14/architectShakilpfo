"use client";
import { useState, type FormEvent } from "react";
import { Button } from "./Button";

const field = "w-full bg-transparent border-b border-g300 focus:border-ink outline-none py-4 text-ink placeholder:text-g400 transition-colors";

export default function ContactForm({ subjects, defaultSubject }: { subjects: string[]; defaultSubject?: string }) {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); /* TODO: POST to NestJS API */ };
  if (sent) return <p className="font-light-h text-4xl text-ink">Thank you — your message is noted. (Demo: not yet sent.)</p>;
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input required className={field} placeholder="Your name" name="name" />
        <input required type="email" className={field} placeholder="Email" name="email" />
      </div>
      <select className={field} name="subject" defaultValue={defaultSubject ?? subjects[0]}>
        {subjects.map((s) => <option key={s}>{s}</option>)}
      </select>
      <textarea required rows={5} className={field} placeholder="Tell me about your project" name="message" />
      <Button type="submit" variant="accent">Send enquiry</Button>
    </form>
  );
}
