import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'



const términos = () => {
  return (
    <>
            <Seo />
            <Screen>
                <Breadcrumb main ="Home" page="Términos y condiciones" link="/" background={"/images/home-poster.jpg"} />

                <section className='p-5'>
        <div dangerouslySetInnerHTML={{ __html : html}}/>
                </section>
            </Screen>
    </>
  )
}

export default términos


export  const  html  = `<p><strong><span style="font-size:16pt;font-family:Cambria,serif;">T&eacute;rminos y condiciones</span></strong></p>
<p><br></p>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Bienvenido a Reservas Baratas (reservasbaratas.com). Estos T&eacute;rminos y Condiciones (&ldquo;T&eacute;rminos&rdquo;) explican c&oacute;mo puede utilizar nuestro sitio web y nuestros servicios, y qu&eacute; puede esperar de nosotros a cambio. Al usar nuestro sitio, usted acepta estos T&eacute;rminos. Si no los acepta, le rogamos que no utilice nuestros servicios.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">1. Sobre nosotros</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Reservas Baratas es un servicio independiente de b&uacute;squeda y reserva de viajes. No poseemos ni operamos ninguna aerol&iacute;nea; simplemente actuamos como intermediarios entre aerol&iacute;neas y clientes.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">2. Uso de nuestro sitio web</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">El usuario se compromete a utilizar nuestro sitio web &uacute;nicamente con fines l&iacute;citos y en pleno cumplimiento de estos T&eacute;rminos. No puede:</span></p>
<ul>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Usar nuestro sitio para reservar o buscar vuelos en nombre de terceros sin su consentimiento.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Intentar realizar ingenier&iacute;a inversa o manipular la funcionalidad de nuestro sitio.</span></p>
    </li>
    <li style="list-style-type:disc;font-size:13pt;font-family:Cambria,serif;">
        <p><span style="font-size:13pt;font-family:Cambria,serif;">Usar cualquier sistema automatizado (bots, scrapers) sin autorizaci&oacute;n escrita.</span></p>
    </li>
</ul>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Nos reservamos el derecho a restringir o cancelar el acceso si detectamos un uso indebido.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">3.Servicios de terceros</span></h3>
<h3><span style="font-size:13pt;font-family:Cambria,serif;">Actuamos como intermediarios. Al reservar un vuelo a trav&eacute;s de nuestra plataforma, su contrato se establece directamente con la aerol&iacute;nea o el proveedor de viajes, no con Reservas Baratas. Sus propios t&eacute;rminos y condiciones, incluidas las pol&iacute;ticas de cancelaci&oacute;n y reembolso, se aplicar&aacute;n a su reserva.</span></h3>
<h3><span style="font-size:13pt;font-family:Cambria,serif;">No nos hacemos responsables de problemas relacionados con retrasos, cancelaciones, calidad del servicio, equipaje o atenci&oacute;n al cliente de las aerol&iacute;neas.</span></h3>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">4. Precios y disponibilidad</span></h3>
<h3><span style="font-size:13pt;font-family:Cambria,serif;">Nos esforzamos por mantener precios y disponibilidad precisos, pero:</span></h3>
<ul>
    <li style="list-style-type:disc;color:#434343;font-size:13pt;font-family:Cambria,serif;">
        <h3><span style="font-size:13pt;font-family:Cambria,serif;">Los precios pueden cambiar en cualquier momento y no est&aacute;n garantizados hasta que se complete la reserva.</span></h3>
    </li>
    <li style="list-style-type:disc;color:#434343;font-size:13pt;font-family:Cambria,serif;">
        <h3><span style="font-size:13pt;font-family:Cambria,serif;">La disponibilidad que se muestra en el sitio se basa en la informaci&oacute;n proporcionada por sistemas de terceros.</span></h3>
    </li>
</ul>
<h3><span style="font-size:13pt;font-family:Cambria,serif;">No nos hacemos responsables de errores de precios, retrasos ni interrupciones del sistema.</span></h3>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">5. Procesamiento de pagos</span></h3>
<h3><span style="font-size:13pt;font-family:Cambria,serif;">El pago puede procesarse directamente a trav&eacute;s de nuestro sitio o redirigirse a un proveedor externo. Usted acepta proporcionar informaci&oacute;n de facturaci&oacute;n precisa. No almacenamos todos los detalles del pago en nuestros servidores.</span></h3>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">6. Cancelaciones y Reembolsos</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Las cancelaciones, reembolsos o cambios en su reserva est&aacute;n sujetos a los t&eacute;rminos de la aerol&iacute;nea o el proveedor de viajes. Le ayudaremos siempre que sea posible, pero no podemos anular las pol&iacute;ticas del proveedor.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">7. Propiedad Intelectual</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Todo el contenido de este sitio, incluyendo logotipos, textos, gr&aacute;ficos y software, es propiedad de Reservas Baratas o sus proveedores de contenido y est&aacute; protegido por las leyes de propiedad intelectual. No puede copiar, reproducir ni distribuir nuestro contenido sin permiso por escrito.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">8. Exenci&oacute;n de Garant&iacute;as</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Nuestros servicios se proporcionan &quot;tal cual&quot;, sin garant&iacute;as. No ofrecemos garant&iacute;as, expresas ni impl&iacute;citas, sobre la fiabilidad, exactitud o disponibilidad de nuestro sitio.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">9. Limitaci&oacute;n de Responsabilidad</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">En la medida m&aacute;xima permitida por la ley, Reservas Baratas no ser&aacute; responsable de ning&uacute;n da&ntilde;o especia, incidental, indirecto, o consecuente, incluyendo, entre otros, lucro cesante, interrupciones del viaje o vulneraciones de datos, que surjan del uso de nuestros servicios.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">10. Modificaciones</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Reservas Baratas se reserva el derecho de actualizar estos T&eacute;rminos en cualquier momento. Los cambios se publicar&aacute;n en esta p&aacute;gina con su fecha de entrada en vigor actualizada. El uso continuado del sitio despu&eacute;s de los cambios implica la aceptaci&oacute;n de los T&eacute;rminos revisados.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">11. Ley Aplicable</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Estos T&eacute;rminos se rigen por la ley de los EE. UU., independientemente de d&oacute;nde acceda a nuestro sitio o cualquier otra jurisdicci&oacute;n legal.</span></p>
<h3><span style="color:#434343;font-size:13.999999999999998pt;font-family:Arial,sans-serif;">12. Cont&aacute;ctenos</span></h3>
<p><span style="font-size:13pt;font-family:Cambria,serif;">Para cualquier pregunta sobre estos T&eacute;rminos, puede contactarnos en:</span></p>`