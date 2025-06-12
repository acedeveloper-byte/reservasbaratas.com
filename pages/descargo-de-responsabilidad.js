import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'


const index = () => {
  return (
    <>
            <Seo title={"Descargo de responsabilidad | reservasbaratas "} description={"Descargo de responsabilidad"}/>
            
            <Screen>
                          <Breadcrumb main="Home" page="Descargo de responsabilidad" link="/" background={"/images/home-poster.jpg"} />

                <section className='p-5'>
                    <div  dangerouslySetInnerHTML={{ __html : html}}/>
                </section>
            </Screen>
                
    </>

  )
}

export default index




export const html =`<p><strong>Descargo de responsabilidad</strong></p>
<p><span style="font-weight: 400;">Bienvenido a Reservas Baratas (https://reservasbaratas.com), una plataforma independiente que ofrece a los usuarios acceso a servicios de reserva de billetes de avi&oacute;n.</span></p>
<p><span style="font-weight: 400;">Lea atentamente este aviso legal antes de usar nuestro sitio web.</span></p>
<h3><span style="font-weight: 400;">1. No es una aerol&iacute;nea</span></h3>
<p><span style="font-weight: 400;">Reservas Baratas no est&aacute; afiliado a ninguna aerol&iacute;nea, proveedor de viajes ni entidad gubernamental. Somos un agregador independiente que conecta a los usuarios con ofertas de vuelos, opciones de reserva y servicios relacionados con viajes a trav&eacute;s de proveedores y socios externos. No poseemos ni operamos ninguna aeronave ni gestionamos directamente las reservas.</span></p>
<h3><span style="font-weight: 400;">2. Exactitud de la informaci&oacute;n</span></h3>
<p><span style="font-weight: 400;">Nos esforzamos por ofrecer informaci&oacute;n precisa y actualizada; sin embargo, no podemos garantizar la integridad, fiabilidad ni exactitud de los horarios de vuelos, precios, disponibilidad ni servicios que se muestran en nuestro sitio. Todos los detalles de viaje est&aacute;n sujetos a cambios sin previo aviso y deben verificarse con los proveedores de servicios antes de tomar cualquier decisi&oacute;n.</span></p>
<h3><span style="font-weight: 400;">3. Enlaces y servicios de terceros</span></h3>
<p><span style="font-weight: 400;">Nuestro sitio web puede contener enlaces a sitios web, motores de reserva o proveedores de servicios de terceros. No controlamos ni nos responsabilizamos del contenido, los t&eacute;rminos, las pol&iacute;ticas ni los servicios ofrecidos por dichos sitios externos. Se recomienda a los usuarios que revisen los t&eacute;rminos y las pol&iacute;ticas de privacidad de cualquier servicio de terceros que utilicen a trav&eacute;s de nuestra plataforma.</span></p>
<h3><span style="font-weight: 400;">4. Sin garant&iacute;a</span></h3>
<p><span style="font-weight: 400;">Reservas Baratas proporciona sus servicios y contenido "tal cual" y "seg&uacute;n disponibilidad". No ofrecemos garant&iacute;as, ni expresas ni impl&iacute;citas, incluyendo, entre otras, garant&iacute;as de comerciabilidad, idoneidad para un fin determinado o no infracci&oacute;n.</span></p>
<p class="demoTitle">&nbsp;</p>
<h3><span style="font-weight: 400;">5. Limitaci&oacute;n de responsabilidad</span></h3>
<p><span style="font-weight: 400;">Reservas Baratas, sus afiliados o socios no ser&aacute;n responsables, bajo ninguna circunstancia, de da&ntilde;os directos, indirectos, incidentales, consecuentes o punitivos que surjan de su acceso, uso o imposibilidad de uso de este sitio, incluyendo, entre otros, problemas causados por interrupciones del servicio, listados inexactos o reservas fallidas.</span></p>
<h3><span style="font-weight: 400;">6. Cambios en el descargo de responsabilidad</span></h3>
<p><span style="font-weight: 400;">Reservas Baratas tiene el derecho exclusivo de cambiar o actualizar este descargo de responsabilidad seg&uacute;n sea necesario sin previo aviso. Es responsabilidad del usuario revisar esta p&aacute;gina peri&oacute;dicamente para comprobar si hay cambios.</span></p>
<h3><span style="font-weight: 400;">7. Cont&aacute;ctenos</span></h3>
<p><span style="font-weight: 400;">Si tiene alguna consulta, cont&aacute;ctenos en</span></p>
<p><span style="font-weight: 400;">support@reservasbaratas.com</span></p>`