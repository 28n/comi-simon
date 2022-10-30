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
  <Layout title="Zweiter Mondkanal">
    <Container>
      <Title>
        Im zweiten Mondkanal (Michael Dorn 3) <Badge>7 September 2011</Badge>
      </Title>
      <P>
        Ein Mistery- Thriller der besonderen Art, in dem Magier, Priester und Kriminelle um ihr Überleben in der Vorhölle kämpfen.
        In dieser Erzählung werden einige Geheimnisse der Kirche offengelegt, die faszinierende Symbolik in Da Vincis berühmtem Fresko ‚Das Letzte Abendmahl‘ beleuchtet. Auch auf das Verhältnis zwischen Jesus und Maria Magdalena und jenes zwischen Jesus und seinem Lieblingsjünger Johannes wird eingegangen.
        Mit Hilfe der Heiligen Schrift und verborgenen Evangelien wird die Unbefleckte Empfängnis von Maria neu interpretiert, die Weisheit der Gnostiker immer wieder herangezogen, um dem Leser eine Erweiterung seiner Sichtweise zu ermöglichen.
        Vielen der Grundgedanken des großen Eingeweihten und Philosophen RUDOLF STEINER wurde in diesem Buch Rechnung getragen.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Leseprobe</Meta>
          <Link href="https://lesen.amazon.de/kp/embed?asin=B005LV0HVU&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_4J1GC9ZMSR24SQPQCH2H">
             https://lesen.amazon.de/ <ViewIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Shop</Meta>
          <Link href="https://www.amazon.de/-/en/Simon-Comi-ebook/dp/B005LV0HVU/ref=sr_1_7?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666818731&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-7">
            https://www.amazon.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Versionen</Meta>
          <span>Taschenbuch, Kindle-download</span>
        </ListItem>
        <ListItem>
          <Meta>Seitenanzahl</Meta>
          <span>246</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'