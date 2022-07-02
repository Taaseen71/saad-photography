import React from 'react'
import styled from 'styled-components'
import { ImageStyle } from '../styles/ImagesStyle'

function Images({ images }) {
  const { title, description, image } = images.attributes
  return (
    <ImageStyle>
      <div>
        {/* <Image
          src={image.data[0].attributes.url}
          // src={image.data[0].attributes.formats.large.url}
          width="100%"
          alt={title}
        /> */}
        {image.data.map((eachImage) => (
          <Image src={eachImage.attributes.url} />
        ))}
      </div>
      <Title>{title}</Title>
      {/* <Description>{description}</Description> */}
    </ImageStyle>
  )
}

const Title = styled.h3`
  color: red;
  font-size: 1rem;
`
const Image = styled.img``
const Description = styled.p``

export default Images
