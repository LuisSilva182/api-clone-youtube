import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles'

function VideoComponent() {
    return(
     <Container>
        <ImageBanner src='https://mtracks.azureedge.net/public/images/albums/568/7264.jpg'/>
        <TitleContainer>
            <ChannelImage>
                LF
            </ChannelImage>
            <TextContainer>
                <Title>GABRIELA ROCHA - ME ATRAIU (AO VIVO)</Title>
                <TextCard>GABRIELA ROCHA</TextCard>
                <TextCard>52 mi de visualizações - há 3 meses</TextCard>
            </TextContainer>
        </TitleContainer>
     </Container>
    )
}

export default VideoComponent;