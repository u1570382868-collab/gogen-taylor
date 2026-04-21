'use client';

import { useState } from 'react';
import Icon from './Icon';
import { company } from '@/data/config';
import { engines } from '@/data/engines';
import { families } from '@/data/families';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export default function ContactForm() {
  const [data, setData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    engineId: '',
    oemRef: '',
    message: '',
    privacy: false,
    website: '', // honeypot
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!data.name.trim()) errs.name = 'Obligatorio';
    if (!data.email.trim()) {
      errs.email = 'Obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errs.email = 'Email no válido';
    }
    if (!data.message.trim()) errs.message = 'Obligatorio';
    if (!data.privacy) errs.privacy = 'Debes aceptar';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.website) return; // honeypot bait

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    const engine = engines.find((x) => x.id === data.engineId);
    const subject = `Consulta web — ${data.name}${engine ? ' · ' + engine.name : ''}`;
    const body = [
      `Nombre: ${data.name}`,
      data.company ? `Empresa/Taller: ${data.company}` : '',
      `Email: ${data.email}`,
      data.phone ? `Teléfono: ${data.phone}` : '',
      engine ? `Motor: ${engine.name}` : '',
      data.oemRef ? `Ref. OEM: ${data.oemRef}` : '',
      '',
      'Mensaje:',
      data.message,
    ]
      .filter(Boolean)
      .join('\n');

    const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-success-bg border border-success rounded-sm p-6 text-center">
        <Icon name="check" className="w-12 h-12 mx-auto mb-3 text-success" strokeWidth={2.5} />
        <h3 className="text-h4 font-display text-ink-800 mb-2">Consulta enviada</h3>
        <p className="text-body text-ink-600 mb-4">
          Se ha abierto tu cliente de correo con la consulta preparada para{' '}
          <span className="font-mono text-mono-md">{company.email}</span>. Si no lo has enviado, contáctanos directamente.
        </p>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-sm bg-whatsapp text-white font-medium hover:bg-whatsapp-hover"
        >
          <Icon name="whatsapp" className="w-4 h-4" strokeWidth={0} />
          Escribir por WhatsApp
        </a>
      </div>
    );
  }

  const inputClass =
    'w-full h-12 px-3 bg-white border border-ink-200 rounded-sm text-body text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-ink-800 focus:shadow-inner transition-colors';
  const errorInputClass = 'border-danger';
  const labelClass = 'block text-label text-ink-700 mb-1.5';
  const errorText = 'text-caption text-danger mt-1';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={data.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Nombre <span className="text-danger">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
            className={`${inputClass} ${errors.name ? errorInputClass : ''}`}
            required
          />
          {errors.name && <p className={errorText}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Empresa / Taller
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={data.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-danger">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={handleChange}
            className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
            required
          />
          {errors.email && <p className={errorText}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="engineId" className={labelClass}>
            Motor de interés
          </label>
          <select
            id="engineId"
            name="engineId"
            value={data.engineId}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Selecciona motor</option>
            {families.map((f) => (
              <optgroup key={f.id} label={f.name}>
                {engines
                  .filter((e) => e.familyId === f.id)
                  .map((e) => (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="oemRef" className={labelClass}>
            Referencia OEM (si la tienes)
          </label>
          <input
            id="oemRef"
            name="oemRef"
            type="text"
            value={data.oemRef}
            onChange={handleChange}
            className={`${inputClass} font-mono`}
            placeholder="Ej. 04179918"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Mensaje <span className="text-danger">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={data.message}
          onChange={handleChange}
          className={`w-full p-3 bg-white border border-ink-200 rounded-sm text-body text-ink-800 placeholder:text-ink-400 focus:outline-none focus:border-ink-800 focus:shadow-inner transition-colors ${
            errors.message ? errorInputClass : ''
          }`}
          placeholder="Describe la pieza o problema con tu motor…"
          required
        />
        {errors.message && <p className={errorText}>{errors.message}</p>}
      </div>

      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={data.privacy}
            onChange={handleChange}
            className="mt-1 accent-red-600"
          />
          <span className="text-body-sm text-ink-600">
            Acepto que mis datos sean usados para responder a esta consulta.{' '}
            <span className="text-danger">*</span>
          </span>
        </label>
        {errors.privacy && <p className={errorText}>{errors.privacy}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-sm bg-ink-800 text-white font-medium hover:bg-red-600 transition-colors"
        >
          Enviar consulta
        </button>
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-sm bg-whatsapp text-white font-medium hover:bg-whatsapp-hover transition-colors"
        >
          <Icon name="whatsapp" className="w-5 h-5" strokeWidth={0} />
          WhatsApp directo
        </a>
      </div>
    </form>
  );
}
