import { useState } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'
import './Registration.css'

function formatPhoneNumber(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  const areaCode = digits.slice(0, 2)
  const phoneNumber = digits.slice(2)

  if (!digits) {
    return ''
  }

  if (digits.length <= 2) {
    return digits.length === 2 ? `(${digits})` : `(${digits}`
  }

  const separatorPosition = digits.length > 10 ? 5 : 4
  const formattedPhoneNumber = phoneNumber.replace(
    new RegExp(`^(\\d{${separatorPosition}})(\\d+)`),
    '$1-$2',
  )

  return `(${areaCode}) ${formattedPhoneNumber}`
}

function formatFullName(value) {
  return value
    .replace(/[^\p{L}\s'-]/gu, '')
    .replace(/\s{2,}/g, ' ')
}

export default function Registration({ modalities }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    modalidade: '',
  })
  const [status, setStatus] = useState({ type: null, message: '' })

  function handleChange(event) {
    const { name, value } = event.target
    const formattedValue = name === 'telefone'
      ? formatPhoneNumber(value)
      : name === 'nome'
        ? formatFullName(value)
        : name === 'email'
          ? value.replace(/\s/g, '').toLowerCase()
          : value

    setFormData((previous) => ({ ...previous, [name]: formattedValue }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const emailInput = event.currentTarget.elements.namedItem('email')
    const nameParts = formData.nome.trim().split(/\s+/).filter(Boolean)
    const phoneDigits = formData.telefone.replace(/\D/g, '')

    if (
      nameParts.length < 2
      || !formData.email
      || !formData.modalidade
      || ![10, 11].includes(phoneDigits.length)
    ) {
      setStatus({ type: 'error', message: 'Por favor, preencha todos os campos obrigatórios.' })
      return
    }

    if (!emailInput.validity.valid || !formData.email.endsWith('@gmail.com')) {
      setStatus({ type: 'error', message: 'Por favor, informe um e-mail válido do Gmail (@gmail.com).' })
      return
    }

    setStatus({
      type: 'success',
      message: 'Cadastro realizado com sucesso! Em breve entraremos em contato.',
    })
  }

  function handleSimulate(type) {
    if (type === 'success') {
      setStatus({ type: 'success', message: 'Simulação: Cadastro enviado com sucesso!' })
    } else if (type === 'error') {
      setStatus({ type: 'error', message: 'Simulação: Erro ao processar o formulário.' })
    } else {
      setStatus({ type: null, message: '' })
    }
  }

  return (
    <section id="cadastro" className="registration-section">
      <div className="registration-card">
        <div className="registration-card__decoration" />
        <div className="registration-card__heading">
          <span>Faça Parte</span>
          <h2>Cadastro de Cliente</h2>
          <p>
            Preencha seus dados para receber novidades, horários e realizar
            pré-agendamento.
          </p>
        </div>

        {status.type && (
          <div className={`registration-alert registration-alert--${status.type}`} role="status">
            {status.type === 'success'
              ? <CheckCircle aria-hidden="true" />
              : <AlertCircle aria-hidden="true" />}
            <span>{status.message}</span>
          </div>
        )}

        <form className="registration-form" onSubmit={handleSubmit} noValidate>
          <div className="registration-field">
            <label htmlFor="nome">Nome Completo *</label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="ex: João da Silva"
              autoComplete="name"
              required
            />
          </div>

          <div className="registration-form__row">
            <div className="registration-field">
              <label htmlFor="email">E-mail *</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@gmail.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="registration-field">
              <label htmlFor="telefone">Telefone / WhatsApp *</label>
              <input
                id="telefone"
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                inputMode="tel"
                maxLength={15}
                required
              />
            </div>
          </div>

          <div className="registration-field">
            <label htmlFor="modalidade">Modalidade de Interesse *</label>
            <select
              id="modalidade"
              name="modalidade"
              value={formData.modalidade}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma modalidade...</option>
              {modalities.map(({ value, name }) => (
                <option key={value} value={value}>{name}</option>
              ))}
            </select>
          </div>

          <button className="registration-form__submit" type="submit">
            Cadastrar Cliente
          </button>
        </form>

        <div className="registration-simulation">
          <span>Teste Visual dos Alertas (Simulação de Estado)</span>
          <div>
            <button type="button" onClick={() => handleSimulate('success')}>Simular Sucesso</button>
            <button type="button" onClick={() => handleSimulate('error')}>Simular Erro</button>
            <button type="button" onClick={() => handleSimulate('clear')}>Limpar Alertas</button>
          </div>
        </div>
      </div>
    </section>
  )
}
