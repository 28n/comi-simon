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
  <Layout title="MondkanalErdschichten">
    <Container>
      <Title>
        Gefangen im Mondkanal, Teil 1: Die neun Erdschichten <Badge>6 April 2016</Badge>
      </Title>
      <P>
        In diesem Mistery- Thriller droht der junge Magier Michael Dorn für die teuflischen Mächte zur Gefahr zu werden. Mit Hilfe von Schwarzer Magie wird er dazu gebracht, den Zugang zu einer höllischen Pforte zu öffnen. Mit ihm stürzen auch Magier, Polizisten und Kriminelle in den höllischen Abgrund. Ihnen allen lauern dämonische Wesen auf, die sich der menschlichen Seelen bemächtigen wollen. Der Weg durch neun Erdschichten zum Kern des Bösen verlangt die Überwindung einiger Tore mit ihren Rätseln, die Tod oder Leben bedeuten. Es sind Tore der Weisheit – aber auch der teuflischen List. Am Ende des Weges winkt ein Mysterium – der Heilige Gral.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Leseprobe</Meta>
          <Link href="https://lesen.amazon.de/kp/embed?asin=B01DU3DBW2&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_0FDKG4V92RDSEV8CMS79">
             https://lesen.amazon.de/ <ViewIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Shop</Meta>
          <Link href="https://www.amazon.de/-/en/simon-comi/dp/1530922100/ref=sr_1_9?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666818731&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-9">
            https://www.amazon.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Versionen</Meta>
          <span>Taschenbuch, Kindle-download</span>
        </ListItem>
        <ListItem>
          <Meta>Seitenanzahl</Meta>
          <span>460</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'