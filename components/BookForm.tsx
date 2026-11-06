"use client";

import { FormEvent, useState } from "react";
import { services, site, whatsappLink } from "@/lib/site";

const initial = { name: "", phone: "", car: "", service: services[0].name, note: "" };

export function BookForm() {
  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!values.name.trim() || !values.phone.trim()) {
      setError("Please add your name and phone number.");
      return;
    }
    setError("");
    const message = [
      "Hi T Garage, I would like to book.",
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Car: ${values.car.trim() || "Not specified"}`,
      `Service: ${values.service}`,
      values.note.trim() ? `Note: ${values.note.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium" htmlFor="book-name">
          Name
          <input
            id="book-name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className="field"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium" htmlFor="book-phone">
          Phone
          <input
            id="book-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="field"
            required
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium" htmlFor="book-car">
        Car
        <input
          id="book-car"
          name="car"
          value={values.car}
          onChange={(event) => update("car", event.target.value)}
          className="field"
          placeholder="White Innova, BMW 5 Series…"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium" htmlFor="book-service">
        Service
        <select
          id="book-service"
          name="service"
          value={values.service}
          onChange={(event) => update("service", event.target.value)}
          className="field"
        >
          {services.map((service) => (
            <option key={service.slug}>{service.name}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium" htmlFor="book-note">
        Message
        <textarea
          id="book-note"
          name="note"
          rows={3}
          value={values.note}
          onChange={(event) => update("note", event.target.value)}
          className="field"
        />
      </label>
      {error ? (
        <p role="alert" className="text-sm font-medium text-blue">
          {error}
        </p>
      ) : (
        <p className="text-sm text-muted">Opens WhatsApp with your booking. Nothing is stored on this site.</p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <button type="submit" className="btn btn-blue w-full sm:w-auto">
          Send on WhatsApp
        </button>
        <a href={`tel:${site.phoneTel}`} className="btn btn-line w-full sm:w-auto">
          Call {site.phoneDisplay}
        </a>
      </div>
    </form>
  );
}
