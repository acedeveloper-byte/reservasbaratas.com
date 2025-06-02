import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'
const promesa = () => {
  return (
    <>
            <Seo title={"Promesa de igualación de precios | reservasbaratas"} description={"Promesa de igualación de precios"} />
            <Screen>

               <Breadcrumb main="Home" page="Promesa de igualación de precios" link="/" background={"/images/home-poster.jpg"} />
                <section className='p-5'>
                    <div dangerouslySetInnerHTML={{ __html : html}} />
                </section>
            </Screen>
    </>
  )
}

export default promesa

export const html = `<p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:16pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:700;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Promesa de igualaci&oacute;n de precios</span></p>
<p><br></p>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">En Reservas Baratas, nos comprometemos a ayudarte a encontrar las mejores ofertas de vuelos disponibles. Si bien somos una plataforma independiente y no vendemos boletos directamente, somos un intermediario entre aerol&iacute;neas y clientes que se compromete a hacer que tu viaje sea asequible.</span></p>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Por eso, con orgullo te ofrecemos nuestra Promesa de Igualaci&oacute;n de Precios, porque mereces reservar tu vuelo con confianza.</span></p>
<h3 dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13.999999999999998pt;font-family:Arial,sans-serif;color:#434343;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">C&oacute;mo funciona</span></h3>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Si encuentra un precio m&aacute;s bajo para el mismo vuelo dentro de las 24 horas posteriores a la reserva a trav&eacute;s de reservasbaratas.com, haremos todo lo posible por igualarlo o ayudarle a obtener un reembolso por la diferencia, sujeto a los t&eacute;rminos a continuaci&oacute;n.</span></p>
<h3 dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13.999999999999998pt;font-family:Arial,sans-serif;color:#434343;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Condiciones para la Igualaci&oacute;n de Precios</span></h3>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Para optar a la igualaci&oacute;n de precios, el vuelo con el precio m&aacute;s bajo debe:</span></p>
<ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ser id&eacute;ntico en todos los detalles (misma aerol&iacute;nea, n&uacute;mero de vuelo, fechas, clase y condiciones tarifarias).</span></p>
    </li>
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">El itinerario del competidor debe estar disponible en l&iacute;nea (no se permiten c&oacute;digos promocionales, membres&iacute;as ni ofertas privadas).</span></p>
    </li>
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ser encontrado y notificado dentro de las 24 horas posteriores a su reserva a trav&eacute;s de Reservas Baratas.</span></p>
    </li>
</ul>
<h3 dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13.999999999999998pt;font-family:Arial,sans-serif;color:#434343;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Qu&eacute; no est&aacute; incluido</span></h3>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nuestra Promesa de Igualaci&oacute;n de Precios no aplica a:</span></p>
<ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Ofertas especiales de programas de fidelizaci&oacute;n, recompensas de tarjetas de cr&eacute;dito o descuentos para viajeros frecuentes</span></p>
    </li>
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Tarifas grupales o al por mayor, paquetes vacacionales o tarifas no publicadas</span></p>
    </li>
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Precios afectados por errores, fallos o diferencias de moneda</span></p>
    </li>
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Reducci&oacute;n de precios despu&eacute;s de 24 horas</span></p>
    </li>
</ul>
<h3 dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13.999999999999998pt;font-family:Arial,sans-serif;color:#434343;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">C&oacute;mo enviar una solicitud de igualaci&oacute;n de precios</span></h3>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Si ha encontrado una tarifa m&aacute;s baja, env&iacute;enos un correo electr&oacute;nico a XXXXX con la siguiente informaci&oacute;n:</span></p>
<ul style="margin-top:0;margin-bottom:0;padding-inline-start:48px;">
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Su referencia de reserva de Reservas Baratas</span></p>
    </li>
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:0pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Una captura de pantalla o un enlace que muestre la tarifa m&aacute;s baja</span></p>
    </li>
    <li dir="ltr" style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;" aria-level="1">
        <p dir="ltr" style="line-height:1.38;margin-top:0pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">El desglose completo de la tarifa y sus condiciones</span></p>
    </li>
</ul>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nuestro equipo revisar&aacute; su solicitud y le responder&aacute; lo antes posible.</span></p>
<h3 dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13.999999999999998pt;font-family:Arial,sans-serif;color:#434343;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Nota final</span></h3>
<p dir="ltr" style="line-height:1.38;margin-top:12pt;margin-bottom:12pt;"><span style="font-size:13pt;font-family:Cambria,serif;color:#000000;background-color:transparent;font-weight:400;font-style:normal;font-variant:normal;text-decoration:none;vertical-align:baseline;white-space:pre;white-space:pre-wrap;">Queremos que se sienta seguro al reservar con nosotros. Si bien no podemos controlar los precios de las aerol&iacute;neas, nos esforzamos por garantizar que obtenga una excelente relaci&oacute;n calidad-precio y opciones transparentes cada vez que utilice Reservas Baratas.</span></p>
<p><br></p>
<p><br></p>
<p><br></p>`