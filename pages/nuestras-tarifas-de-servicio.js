import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'

const nuestras = () => {
  return (
    <>
            <Seo  title="Nuestras tarifas de servicio | reservasbaratas" description={"Nuestras tarifas de servicio"}/>

            <Screen>
                                  <Breadcrumb main="Home" page="Nuestras tarifas de servicio" link="/" background={"/images/home-poster.jpg"} />

                        <section className='p-5'>
                        <div dangerouslySetInnerHTML={{ __html : html}} />
                        </section>
            </Screen>
    </>
  )
}

export default nuestras


export const  html = `<p><strong><span style="font-size:16pt;font-family:Cambria,serif;">Nuestras tarifas de servicio</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Bienvenido a Reservas Baratas, tu plataforma ideal para reservar vuelos econ&oacute;micos. Para garantizar la transparencia y la comprensi&oacute;n de nuestras operaciones, esta p&aacute;gina describe las tarifas de servicio que podemos cobrar al reservar vuelos a trav&eacute;s de nuestro sitio web.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">&iquest;Por qu&eacute; cobramos tarifas de servicio?</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Nuestras tarifas de servicio respaldan el funcionamiento y el desarrollo continuos de la plataforma Reservas Baratas. Estas tarifas ayudan a cubrir:</span></p>
<p><br></p>
<ul>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Tecnolog&iacute;a de reserva segura y fluida</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Mejoras continuas de la plataforma</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Atenci&oacute;n al cliente</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Sistemas de pago y protecci&oacute;n contra fraudes</span></p>
    </li>
</ul>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Trabajamos de forma independiente para buscar, mostrar y facilitar reservas de m&uacute;ltiples fuentes, lo que garantiza que puedas comparar y reservar las mejores ofertas disponibles.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">Nuestra estructura de tarifas</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">A continuaci&oacute;n, se detallan las posibles tarifas de servicio que podr&iacute;a aplicar al reservar con nosotros:</span></p>
<p><br></p>
<p><br></p>
<div align="left">
    <table style="border: none; border-collapse: collapse; width: 100%;">
        <tbody>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p><strong><span style="font-size:13pt;font-family:Cambria,serif;">Tipo de tarifa</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><strong><span style="font-size:13pt;font-family:Cambria,serif;">Descripci&oacute;n</span></strong></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><strong><span style="font-size:13pt;font-family:Cambria,serif;">Importe</span></strong></p>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Tarifa de reserva</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Se aplica al usar nuestra plataforma para buscar y completar su reserva.</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">$5 &ndash; $25 (por viajero)</span></p>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Tarifa por solicitud de cambio</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Si solicita una modificaci&oacute;n, se le cobrar&aacute; una tarifa de gesti&oacute;n, adem&aacute;s de los cargos de terceros.</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">$10 &ndash; $50 (por solicitud)</span></p><br>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Tarifa de cancelaci&oacute;n</span></p><br>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Cubre nuestros costos de procesamiento si solicita una cancelaci&oacute;n</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">$15 &ndash; $50 (por boleto)</span></p><br>
                </td>
            </tr>
            <tr>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Procesamiento de pagos</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Se aplica seg&uacute;n el m&eacute;todo de pago o la moneda utilizada</span></p>
                </td>
                <td style="border: solid #000000 1pt;">
                    <p><span style="font-size:13pt;font-family:Cambria,serif;">Del 1,5 % al 3,5 % del precio total</span></p><br>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<p><br></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Tenga en cuenta que esta tarifa est&aacute; sujeta a cambios. Todas las tarifas se muestran claramente durante el proceso de pago y no son reembolsables.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">La transparencia es nuestra pol&iacute;tica</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Nos comprometemos a ofrecer una total transparencia en los precios. Siempre podr&aacute; consultar el coste total de su reserva, incluyendo todos los cargos por servicio, antes de finalizar la compra.</span></p>
<p><br></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">&iquest;Tiene alguna pregunta?</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Si tiene alguna pregunta sobre tarifas, cargos o pol&iacute;ticas, no dude en contactarnos en&nbsp;</span><strong><span style="font-size:13pt;font-family:Cambria,serif;">XXXX</span></strong><span style="font-size:13pt;font-family:Cambria,serif;">.</span></p>
<p><br></p>
<p><br></p>
<p><br></p>
<p><br></p>`