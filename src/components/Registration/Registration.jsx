import { useState } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'
import './Registration.css'

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
    setFormData((previous) => ({ ...previous, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!formData.nome || !formData.email || !formData.telefone || !formData.modalidade) {
      setStatus({ type: 'error', message: 'Por favor, preencha todos os campos obrigatórios.' })
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

        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="registration-field">
            <label htmlFor="nome">Nome Completo *</label>
            <input
              id="nome"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="ex: João da Silva"
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
                placeholder="seu@email.com"
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
