import React from 'react'
import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'

const html = `
  <p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;">
    <span style="font-size:16pt;font-family:Cambria,serif;color:#000000;font-weight:700;">
      Política de Cancelación
    </span>
  </p>
  <p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;">
    <span style="font-size:13pt;font-family:Cambria,serif;color:#000000;">
      Reservas Baratas es una plataforma independiente de búsqueda y reserva de vuelos. No operamos vuelos ni estamos asociados con ninguna aerolínea. Todas las reservas son procesadas por aerolíneas externas y se aplican sus políticas de cancelación y reembolso.
    </span>
  </p>
  <p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;">
    <span style="font-size:13pt;font-family:Cambria,serif;color:#000000;">
      Tenga en cuenta que cada proveedor tiene sus propias normas con respecto a:
    </span>
  </p>
  <ul style="padding-left: 2rem;">
    <li>Periodos de cancelación</li>
    <li>Requisitos para reembolsos</li>
    <li>Cargos por cambio o nueva reserva</li>
    <li>Condiciones de no reembolso de boletos</li>
  </ul>
  <p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;">
    <span style="font-size:13pt;font-family:Cambria,serif;color:#000000;">
      Le recomendamos encarecidamente que revise la política de cancelación y reembolso de la aerolínea antes de confirmar su reserva.
    </span>
  </p>
  <h3 style="margin-top:14pt;margin-bottom:4pt;">
    Key Points:
  </h3>
  <ul style="padding-left: 2rem;">
    <li><strong>Cancellations must be handled directly with the airline</strong> listed in your booking confirmation.</li>
    <li><strong>Refund eligibility and fees</strong> depend on the fare type and provider’s terms. Some tickets are <strong>non-refundable</strong>.</li>
    <li><strong>No-shows</strong> may result in loss of ticket value.</li>
    <li>If a flight is cancelled or changed by the airline, <strong>they will provide options</strong> per their policy (refund, credit, or rebooking).</li>
    <li><strong>Reservas Baratas does not issue refunds directly</strong> but will assist you in reaching the provider.</li>
  </ul>
  <h3 style="margin-top:14pt;margin-bottom:4pt;">
    How to Cancel a Booking
  </h3>
  <ul style="padding-left: 2rem;">
    <li>Follow the cancellation link or instructions provided in your confirmation email.</li>
    <li>Get in touch with our experts with your booking details to seek their assistance with the cancellation procedure.</li>
    <li>Always review the provider’s terms to understand cancellation fees or refund limits.</li>
  </ul>
`;

const PoliticaDeCancelacion = () => {
  return (
    <>
      <Seo title="Política de Cancelación | reservasbaratas" description="Política de Cancelación" />
      <Screen>
        <Breadcrumb
          main="Home"
          page="Política de Cancelación"
          link="/"
          background="/images/home-poster.jpg"
        />
        <section className="p-5">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </section>
      </Screen>
    </>
  )
}

export default PoliticaDeCancelacion
