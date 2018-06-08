import React from 'react'
import {Carousel} from 'react-bootstrap'

const Carrusel = () => {

return (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="http://srmao.com/wp/wp-content/uploads/2017/04/paisaje-1-1589x1080.jpg" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="http://revistamito.com/wp-content/uploads/2014/08/Paisaje-3.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="https://miviaje.com/wp-content/uploads/2016/05/shutterstock_250683580.jpg" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
)}

export default Carrusel