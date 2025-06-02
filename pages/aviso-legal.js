import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'

const aviso = () => {
  return (
    <>
            <Seo  title={"Aviso Legal | reservasbaratas"} description={"Aviso Legal"}/>
                    <Screen>
                        <Breadcrumb main ="Home" page="Aviso Legal" link="/" background={"/images/home-poster.jpg"} />

                        <section className ="p-5">
            <div  dangerouslySetInnerHTML={{__html : html}}/>

                        </section>
            </Screen>
    </>
  )
}

export default aviso


export const  html  = `<p><strong><span style="font-size:16pt;font-family:Cambria,serif;">Aviso Legal</span></strong></p>
<p><br></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Bienvenido a Reservas Baratas. Al usar nuestro sitio web y nuestros servicios, usted reconoce y acepta los t&eacute;rminos de este Aviso Legal. Si no los acepta, le rogamos que no utilice nuestro sitio.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">1. Plataforma independiente</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Reservas Baratas es una plataforma independiente de b&uacute;squeda y reserva de viajes. No somos propiedad de ninguna aerol&iacute;nea, ni estamos operados ni respaldados por ella, y no operamos vuelos ni ofrecemos servicios de viaje directos.</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Toda la informaci&oacute;n de vuelos, precios, horarios y disponibilidad que se muestra en este sitio web son proporcionados por proveedores externos de servicios de viajes (como aerol&iacute;neas, agencias de viajes en l&iacute;nea o consolidadores).</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">2. Exactitud de la informaci&oacute;n</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Reservas Baratas se esfuerza por garantizar que la informaci&oacute;n de nuestro sitio web est&eacute; actualizada y sea precisa. Sin embargo, los detalles de los vuelos, los precios y la disponibilidad est&aacute;n sujetos a cambios sin previo aviso y pueden variar seg&uacute;n los sistemas del proveedor.</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Reservas Baratas no garantiza la exactitud, integridad ni fiabilidad de los datos de vuelos ni de los precios que se muestran en el sitio.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">3. Responsabilidad de Terceros</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Al realizar una reserva a trav&eacute;s de nuestro sitio web, su contrato se establece directamente con el proveedor de viajes externo (como una aerol&iacute;nea o agencia de viajes). Se aplicar&aacute;n sus t&eacute;rminos y condiciones, incluyendo las pol&iacute;ticas de cambios, cancelaciones y reembolsos.</span></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Reservas Baratas no se responsabiliza de:</span></p>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Retrasos, cancelaciones o cambios de horario de vuelos</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Calidad o seguridad del servicio de la aerol&iacute;nea</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">P&eacute;rdidas, da&ntilde;os o cargos adicionales de los proveedores de viajes</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Disputas o problemas derivados de sus interacciones con terceros</span></p>
    </li>
</ul>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">4. Limitaci&oacute;n de Responsabilidad</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">En la medida m&aacute;xima permitida por la ley, Reservas Baratas y sus afiliados no ser&aacute;n responsables de ning&uacute;n da&ntilde;o directo, indirecto, incidental o consecuente derivado de:</span></p>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Uso o imposibilidad de uso de nuestro sitio</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Errores u omisiones en los datos de vuelo</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Acciones o fallos de proveedores de viajes externos</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Acceso o uso no autorizado de informaci&oacute;n personal</span></p>
    </li>
</ul>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">El uso de nuestro sitio web es bajo su propia responsabilidad.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">5. No constituye asesoramiento legal ni de viajes</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Todo el contenido de este sitio se proporciona &uacute;nicamente con fines informativos. No constituye asesoramiento legal, financiero ni de viajes. Confirme siempre los detalles con su aerol&iacute;nea o proveedor de viajes antes de reservar.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">6. Cambios a este Aviso Legal</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Nos reservamos el derecho a actualizar o modificar este Aviso Legal en cualquier momento sin previo aviso. La versi&oacute;n actualizada se publicar&aacute; en esta p&aacute;gina con la nueva fecha de entrada en vigor. El uso continuado del sitio despu&eacute;s de los cambios implica su aceptaci&oacute;n.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">7. Cont&aacute;ctenos</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Si tiene alguna pregunta sobre este Aviso Legal, cont&aacute;ctenos en:</span></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">XXXXX</span></p>`