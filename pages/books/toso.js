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
import thumbToso from "../../public/book/toso.jpg";

const Work = () => (
  <Layout title="Toso">
    <Container>
      <Title>
        Toso <Badge>8 Februar 2016</Badge>
      </Title>
      <P>
        Eine Zukunftsvision - realer, als viele glauben. Im vierten Jahrtausend beherrschen Androiden und Halbandroiden die Menschen durch Anwendung von fortgeschrittener Licht- und Tontechnik – und durch eine gezielte Verseuchung aller Lebensmittel. Viele Menschen rebellieren, flüchten verzweifelt in die Wälder. All diese Flüchtlinge stammen aus drei Hauptvolksgruppen: den MEATS, den VEGIS und dem hochspirituellen Volk der PRANS. Künstlich erschaffene Menschen kennen ihre Herkunft nicht mehr, wachsen in Heimen auf. TOSO, einem Mitglied der VEGIS, gelingt es als einem von wenigen, dem Rätsel seiner Herkunft auf den Grund zu gehen. Als Kenner menschlichen Verhaltens durchschaut er, was anderen verborgen bleibt. Diese Erzählung über den schicksalhaften Kampf der Menschen gegen ihre übermächtig erscheinenden Feinde ist ein Thriller der besonderen Art. Er beinhaltet Leidenschaftlich-erotische Liebesbeziehungen, daher ist das Buch nicht geeignet für Kinder und Jugendliche unter 16 Jahren.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Leseprobe</Meta>
          <Link href="https://lesen.amazon.de/kp/embed?asin=B01BL5QTL6&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_YGXT456FCK4QGFQZ4S1Vhttps://www.amazon.de/-/en/simon-comi-ebook/dp/B01BL5QTL6/ref=sr_1_2?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666816666&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-2">
            https://lesen.amazon.de/ <ViewIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Shop</Meta>
          <Link href="https://www.amazon.de/-/en/simon-comi-ebook/dp/B01BL5QTL6/ref=sr_1_2?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666816666&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-2">
            https://www.amazon.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Versionen</Meta>
          <span>Taschenbuch, Kindle-download</span>
        </ListItem>
        <ListItem>
          <Meta>Seitenanzahl</Meta>
          <span>394</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
