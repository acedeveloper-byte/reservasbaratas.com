import Breadcrumb from '@/component/common/Breadcrumb'
import Screen from '@/component/common/Screen'
import Seo from '@/component/common/Seo'
import React from 'react'

const sobre = () => {
  return (
   <>
      <Seo  title={"Sobre nosotras | reservasbaratas"} description={"Sobre nosotras"}/>
            <Screen>
          <Breadcrumb main ="Home" page="Sobre nosotras" link="/" background={"/images/home-poster.jpg"} />
                <section className='p-5'>
                            <div  dangerouslySetInnerHTML={{__html :html }}/>
                </section>
            </Screen>
   </>
  )
}

export default sobre

export const html = `<p><strong><em>Bienvenido a Reservas Baratas: &iexcl;Tu puerta de entrada a viajes econ&oacute;micos!</em></strong></p>

<p><span style="font-weight: 400;">En Reservas Baratas, creemos que explorar el mundo no deber&iacute;a ser un gasto excesivo. Por eso, creamos una plataforma independiente de b&uacute;squeda de vuelos dise&ntilde;ada para ayudar a los viajeros a encontrar boletos de avi&oacute;n baratos con facilidad, rapidez y confianza.</span></p>

<p><span style="font-weight: 400;">Te conectamos con las mejores ofertas de vuelos disponibles de las principales aerol&iacute;neas para que puedas volar dentro de tu presupuesto. Contacta con nuestros expertos para planificar tu viaje tan esperado y vivir una experiencia incre&iacute;ble.</span></p>

<h3><span style="font-weight: 400;">&iquest;Por qu&eacute; elegir Reservas Baratas?</span></h3>
<p><strong>Independientes e imparciales</strong><span style="font-weight: 400;">: No pertenecemos a ninguna aerol&iacute;nea ni a ninguna gran plataforma de reservas. Esto significa que no tenemos intenciones ocultas; solo ofertas reales.</span></p>

<p><strong>Precios transparentes:</strong><span style="font-weight: 400;"> Lo que ves es lo que obtienes. Te mostramos los precios totales desde el principio; sin sorpresas al finalizar la compra.</span></p>

<p><strong>B&uacute;squeda r&aacute;pida y sencilla</strong><span style="font-weight: 400;">: Nuestro sistema optimizado te ayuda a comparar vuelos r&aacute;pidamente para que puedas reservar con solo unos clics.</span></p>

<p><strong>Atenci&oacute;n al cliente 24/7:</strong><span style="font-weight: 400;"> Estamos disponibles las 24 horas para atender tus inquietudes cuando las necesites.</span></p>

<h3><span style="font-weight: 400;">A Qui&eacute;nes Servimos</span></h3>
<p><span style="font-weight: 400;">Desde viajeros solitarios y familias hasta estudiantes y profesionales, Reservas Baratas est&aacute; aqu&iacute; para quienes buscan ahorrar dinero al volar. Ya seas un viajero frecuente o reserves tu primer viaje, nos enorgullece ser tu aliado en viajes asequibles.</span></p>

<h3><span style="font-weight: 400;">&iquest;Listo para reservar tu pr&oacute;xima aventura?</span></h3>
<p><span style="font-weight: 400;">Nuestra &uacute;nica misi&oacute;n es empoderar a los viajeros diarios, haciendo que viajar en avi&oacute;n sea m&aacute;s accesible, asequible y transparente. &iquest;A qu&eacute; esperas? Empieza tu b&uacute;squeda ahora y descubre lo f&aacute;cil que es ahorrar con reservasbaratas.com.</span></p>`
