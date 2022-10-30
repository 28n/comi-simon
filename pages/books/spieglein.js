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
  <Layout title="Spieglein">
    <Container>
      <Title>
        Spieglein, Spieglein an der Wand, was passiert denn nur in unserem Land? <Badge>13 Juni 2012</Badge>
      </Title>
      <P>
        „Ich verrate dir …“ ist eine Lieblingsfloskel von Vinzenz Remus, wenn er sich ärgert. Er sagt einfach das, was er sich denkt. Ein Buch, das aufrüttelt und zugleich amüsiert. Ein Buch als Spiegelbild unserer Gesellschaft. Eine Fibel für Politiker und diejenigen, die sich betroffen fühlen. Es gilt natürlich wie immer die Unschuldsvermutung. Hier hadern Christen mit Andersgläubigen, Inländer mit Ausländern, Wähler mit den Gewählten, Vernünftige mit Dummen …
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Leseprobe</Meta>
          <Link href="https://lesen.amazon.de/kp/embed?asin=B005LQ9DMO&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_4VCVK9WWFP90N4K784HY">
             https://lesen.amazon.de/ <ViewIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Shop</Meta>
          <Link href="https://www.amazon.de/-/en/comi-simon/dp/1477652477/ref=sr_1_1?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666818731&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-1">
            https://www.amazon.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Versionen</Meta>
          <span>Taschenbuch, Kindle-download</span>
        </ListItem>
        <ListItem>
          <Meta>Seitenanzahl</Meta>
          <span>476</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'