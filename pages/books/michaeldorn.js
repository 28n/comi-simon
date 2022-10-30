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
  <Layout title="Michael Dorn">
    <Container>
      <Title>
        Michael Dorn und die Mächte der Magie <Badge>15 Apr 2018</Badge>
      </Title>
      <P>
        Michael ist ein seltsamer Junge, dessen sechster Sinn ihn auf eine merkwürdige Weise in eine geheime Magieschule in eine Burg führt, gerade als er ratlos in der Sackgasse seiner Weiterbildung steht. Er stößt zu anderen Jugendlichen, die allesamt verschiedene geistige, magische Gaben besitzen.Das mächtige, weise Orakel der zwei flammenden Säulen entscheidet zu welcher magischen Gemeinschaft er gehört.So entpuppt sich die Schule nicht nur als Quelle des magischen Wissens, des Vergnügens in Gestalt des waghalsigen Mislityspiels, sondern als Ort voller Gefahren, die sich hauptsächlich in der dunklen, großen Seegrotte unter der Burg abspielen. Hier muss sich Michael nicht nur gegen die Mitschüler des linken Orakels, sondern auch gegen die eigenen Lehrer und, nebenbei, gegen böse Naturgeister behaupten. Glücklicherweise zieht er in den Kampf mit Gleichgesinnten – um einem furchtbaren Geheimnis nachzuspüren, das die Geheimschule in Aufruhr versetzt.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Leseprobe</Meta>
          <Link href="https://lesen.amazon.de/kp/embed?asin=B07CCB2WM9&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_R826RG92D3916FZZDG1A">
             https://lesen.amazon.de/ <ViewIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Shop</Meta>
          <Link href="https://www.amazon.de/-/en/Herr-simon-comi/dp/1980839042/ref=sr_1_3?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666818731&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-3">
            https://www.amazon.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Versionen</Meta>
          <span>Taschenbuch, Kindle-download</span>
        </ListItem>
        <ListItem>
          <Meta>Seitenanzahl</Meta>
          <span>486</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'