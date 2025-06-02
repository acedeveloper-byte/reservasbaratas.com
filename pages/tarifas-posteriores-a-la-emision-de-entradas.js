import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'

const tarifas = () => {
  return (
    <>
            <Seo title="Tarifas posteriores a la emisión de entradas" description={"Tarifas posteriores a la emisión de entradas"}/>
            <Screen>
                              <Breadcrumb main="Home" page="Tarifas posteriores a la emisión de entradas" link="/" background={"/images/home-poster.jpg"} />

                <section className='p-5'>
                    <div dangerouslySetInnerHTML={{ __html :  html}} />
                </section>
            </Screen>
    </>
  )
}

export default tarifas


export const html = `<p><strong>Tarifas posteriores a la emisi&oacute;n de entradas</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">En Reservas Baratas, valoramos la transparencia. A continuaci&oacute;n, se detallan las tarifas que se aplican por cualquier cambio posterior a la emisi&oacute;n del billete o por servicios relacionados con su reserva de vuelo. Estas tarifas se aplican por pasajero y por billete, y son adicionales a los cargos de la aerol&iacute;nea.</span></p>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">Cancelaciones de vuelos</span></h3>
<table>
<tbody>
<tr>
<td>
<p><strong>Servicio</strong></p>
</td>
<td>
<p><strong>Vuelos nacionales</strong></p>
</td>
<td>
<p><strong>Vuelos internacionales</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Cancelaci&oacute;n asistida por agente dentro de las 24 horas posteriores a la reserva</span></p>
</td>
<td>
<p><span style="font-weight: 400;">$50</span></p>
</td>
<td>
<p><span style="font-weight: 400;">$75</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Cancellation within 24 hours with future credit</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Econ&oacute;mica - $50</span></p>
<p><span style="font-weight: 400;">Primera/Negocio - $100</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Econ&oacute;mica - $50</span></p>
<p><span style="font-weight: 400;">Primera/Negocio - $100</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Cancelaci&oacute;n dentro de las 24 horas con reembolso</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Econ&oacute;mica - $100</span></p>
<p><span style="font-weight: 400;">Primera/Negocio - $250</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Econ&oacute;mica - $250</span></p>
<p><span style="font-weight: 400;">Primera/Negocio - $250</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><em><span style="font-weight: 400;">Nota: Adem&aacute;s de estos cargos, pueden aplicarse penalidades de las aerol&iacute;neas y diferencias de tarifas.</span></em></p>
<h3><span style="font-weight: 400;">Cambios de vuelo (fecha/hora)</span></h3>
<table>
<tbody>
<tr>
<td>
<p><strong>Servicio</strong></p>
</td>
<td>
<p><strong>Clase Econ&oacute;mica</strong></p>
</td>
<td>
<p><strong>Primera Clase Ejecutiva</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Cambiar dentro de los 10 d&iacute;as siguientes a la nueva fecha de viaje</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Nacional - $50</span></p>
<p><span style="font-weight: 400;">Internacional - $50</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Nacional - $100</span></p>
<p><span style="font-weight: 400;">Internacional - $100</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Cambiar m&aacute;s all&aacute; de 10 d&iacute;as de la nueva fecha de viaje</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Nacional - $100</span></p>
<p><span style="font-weight: 400;">Internacional - $250</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Nacional - $250</span></p>
<p><span style="font-weight: 400;">Internacional - $250</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Exenciones asistidas por agentes</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Nacional - $50</span></p>
<p><span style="font-weight: 400;">Internacional - $50</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Nacional - $100</span></p>
<p><span style="font-weight: 400;">Internacional - $100</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<h3><span style="font-weight: 400;">Notas importantes</span></h3>
<ul>
<li style="font-weight: 400;"><strong>Cargos no reembolsables</strong><span style="font-weight: 400;">: Todos los cargos por servicio cobrados por Reservas Baratas no son reembolsables.</span></li>
</ul>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><strong>Se aplican las pol&iacute;ticas de la aerol&iacute;nea</strong><span style="font-weight: 400;">: Todos los cambios y cancelaciones est&aacute;n sujetos a las reglas y penalizaciones de la aerol&iacute;nea.</span></li>
</ul>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><strong>Cargos adicionales</strong><span style="font-weight: 400;">: Cualquier penalizaci&oacute;n o diferencia de tarifa impuesta por la aerol&iacute;nea se cobrar&aacute; por separado.</span></li>
</ul>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><strong>Documentaci&oacute;n</strong><span style="font-weight: 400;">: Algunos servicios requieren documentaci&oacute;n v&aacute;lida para su procesamiento (por ejemplo, para tr&aacute;mites de visa).</span></li>
</ul>
<h3><span style="font-weight: 400;">&iquest;Necesitas ayuda?</span></h3>
<p><span style="font-weight: 400;">Nuestro servicio de atenci&oacute;n al cliente est&aacute; disponible las 24 horas, los 7 d&iacute;as de la semana, para ayudarte con tus solicitudes posteriores a la emisi&oacute;n de tickets. Cont&aacute;ctanos en cualquier momento:</span></p>
<p><span style="font-weight: 400;">support@reservasbaratas.com</span></p>
<p><br /><br /></p>`