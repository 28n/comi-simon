import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { ViewIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Taigru Orakel">
    <Container>
      <Title>
        Taigru Orakel <Badge>29 Mai 2012</Badge>
      </Title>
      <P>
        Das Orakel verbindet die spirituellen Weisheiten des Tarot, I Ging und der Runen. In diesem Buch werden jedoch weder Tarotkarten noch Münzen oder Runensteine für eine Orakelbefragung benötigt. Alles, was du brauchst, ist dieses Buch. Folgende Vorgehensweise hat sich bewährt: ENTSPANNEN, KONZENTRIEREN, EINE FRAGE STELLEN. LINKE ODER RECHTE BUCHSEITE WÄHLEN. BUCH AUFSCHLAGEN UND DEN ENTSPRECHENDEN RAT DES ORAKELS LESEN.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Leseprobe</Meta>
          <Link href="https://lesen.amazon.de/kp/embed?asin=B0089Y0UKE&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_KM7W6CMD1QQ9SGJQP6ZK">
            https://lesen.amazon.de/ <ViewIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Shop</Meta>
          <Link href="https://www.amazon.de/-/en/Comi-Simon/dp/1477509984/ref=sr_1_5?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666818731&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-5">
            https://www.amazon.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Versionen</Meta>
          <span>Taschenbuch, Kindle-download</span>
        </ListItem>
        <ListItem>
          <Meta>Seitenanzahl</Meta>
          <span>398</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
