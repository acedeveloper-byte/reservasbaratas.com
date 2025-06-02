import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'


const impuestos = () => {
  return (
    <>
            <Seo title={"Impuestos y tasas | reservasbaratas "} description={"Impuestos y tasas"}/>
            
            <Screen>
                          <Breadcrumb main="Home" page="Impuestos y tasas" link="/" background={"/images/home-poster.jpg"} />

                <section className='p-5'>
                    <div  dangerouslySetInnerHTML={{ __html : html}}/>
                </section>
            </Screen>
                
    </>

  )
}

export default impuestos




export const html =`<p><strong>Impuestos y tasas</strong></p>
<p><br /><br /></p>
<p><span style="font-weight: 400;">En Reservas Baratas, nos comprometemos a brindarle una experiencia de reserva transparente y justa. Esta p&aacute;gina explica c&oacute;mo se aplican los impuestos y cargos a sus reservas de vuelos.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Somos una plataforma de reservas independiente y no estamos afiliados a ninguna aerol&iacute;nea, lo que significa que recopilamos y mostramos informaci&oacute;n de vuelos de diversas fuentes. Todos los impuestos y cargos que se muestran durante su reserva se detallan claramente antes de que complete la compra.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">Qu&eacute; incluye tu tarifa</span></h3>
<p><span style="font-weight: 400;">El precio total que ves al finalizar la compra suele incluir lo siguiente:</span></p>
<p>&nbsp;</p>
<h4><span style="font-weight: 400;">1. Tarifa base</span></h4>
<p><span style="font-weight: 400;">Este es el precio del billete establecido por la aerol&iacute;nea o el proveedor de viajes. Cubre el coste real del transporte desde tu ciudad de origen hasta tu destino.</span></p>
<p>&nbsp;</p>
<h4><span style="font-weight: 400;">2. Impuestos gubernamentales y tasas aeroportuarias</span></h4>
<p><span style="font-weight: 400;">Se trata de tasas obligatorias que se recaudan en nombre de diversas autoridades, entre ellas:</span></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Tasas de uso del aeropuerto</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Tasas de salida/llegada</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Tasas de seguridad</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Tasas de aduanas e inmigraci&oacute;n</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Cargos por instalaciones para pasajeros</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Recargos por combustible (si corresponde)</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Estos importes los establecen los gobiernos locales, las autoridades aeron&aacute;uticas y los operadores aeroportuarios, no Reservas Baratas.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">3. Cargos por servicio (si corresponde)</span></h3>
<p><span style="font-weight: 400;">Reservas Baratas cobra cargos por servicio por procesar y respaldar su reserva. Estos cargos se muestran claramente al finalizar la compra y se utilizan para cubrir los costos de mantenimiento, soporte y procesamiento de la plataforma. Consulte nuestra p&aacute;gina de Cargos por servicio para obtener m&aacute;s informaci&oacute;n.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">Por qu&eacute; pueden variar los precios finales</span></h3>
<p><span style="font-weight: 400;">Los precios de los vuelos son din&aacute;micos y pueden cambiar debido a:</span></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Disponibilidad en tiempo real</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Fluctuaciones en el tipo de cambio</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Ajustes de los tipos de impuestos por parte de gobiernos o aeropuertos</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Costos de procesamiento relacionados con el m&eacute;todo de pago</span></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Siempre intentamos mostrar los precios m&aacute;s precisos y actualizados, pero su coste final podr&iacute;a reflejar estos factores al momento de la compra.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">Garant&iacute;a sin cargos ocultos</span></h3>
<p><span style="font-weight: 400;">No a&ntilde;adimos cargos ocultos al finalizar la compra. Todos los impuestos y cargos se detallar&aacute;n y mostrar&aacute;n antes de pagar. Sabr&aacute; exactamente qu&eacute; est&aacute; pagando.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">&iquest;Necesita ayuda?</span></h3>
<p><span style="font-weight: 400;">Si tiene alguna pregunta sobre impuestos o cargos espec&iacute;ficos de su reserva, no dude en contactar con nuestro equipo de atenci&oacute;n al cliente en support@reservasbaratas.com.</span></p>
<p><br /><br /><br /><br /></p>`