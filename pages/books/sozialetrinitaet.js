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
import { AiOutlineShoppingCart } from "react-icons/ai"
import thumbTrinitaet from "../../public/book/trinitaet.jpg";

const Work = () => (
  <Layout title="Michael Dorn">
    <Container>
      <Title>
        Soziale Trinität: Missachtete Erkenntnisse von Rudolf Steiner als Rettungsanker für die EU <Badge>16 Juni 2017</Badge>
      </Title>
  {/*<WorkImage src="https://www.pr-bild-award.de/site-prba/assets/files/1/prba-teaser.jpg" alt="test"/>*/}
  
      <P>
        Empfohlene Lektüre für alle nach sozialer Erneuerung strebenden Freidenker, für Politiker, Wirtschaftstreibende und geistig Schaffende
        Soziale Marktwirtschaft hat versagt. Die EU zerstört sich derzeit selbst durch falsche Finanz-und Europolitik, missachtet die Souveränität Ihrer Staaten, wird beeinflusst von Großkonzernen und betreibt falsche Flüchtlingspolitik – dadurch geraten die Eckpfeiler des sozialen Organismus aus dem Gleichgewicht: Freiheit, Gleichheit und Brüderlichkeit im Geistleben, Rechtsleben sowie im Wirtschaftsleben. Diese Säulen des sozialen Lebens beinhalten soziale Gesetze, die, beachtet, das soziale Zusammenleben der Menschen erträglicher und wünschenswerter gestalten.
        Die Zeit drängt dazu, sich politisch zu besinnen und die Zeichen der Zeit durch neues Denken zu erkennen. EU und ihre Staaten sind dazu berufen, so rasch als möglich die Notwendigkeit der rettenden sozialen Gesetze anzuerkennen und sie dann zügig in die Tat umzusetzen.
        Die heutige Weltwirtschaft leidet unter den politischen Intentionen der Volkswirtschaften. Nur eine Soziale Trinität im Sinne von Dr. RUDOL STEINER kann sie davor bewahren. Davon hängt das Wohlergehen aller EU-und Weltbürger ab.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Leseprobe</Meta>
          <Link href="https://lesen.amazon.de/kp/embed?asin=B072KW4TVW&preview=newtab&linkCode=kpe&ref_=cm_sw_r_kb_dp_J0ZJRSCRPSBYQW7TVA4W">
             https://lesen.amazon.de/ <ViewIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Shop</Meta>
          <Link href="https://www.amazon.de/-/en/comi-simon-ebook/dp/B072KW4TVW/ref=sr_1_4?crid=IZMZYLB5O3NK&keywords=comi+simon&qid=1666818731&qu=eyJxc2MiOiIwLjkxIiwicXNhIjoiMC4wMCIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=comi+si%2Caps%2C252&sr=8-4">
            https://www.amazon.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Versionen</Meta>
          <span>Taschenbuch, Kindle-download</span>
        </ListItem>
        <ListItem>
          <Meta>Seitenanzahl</Meta>
          <span>202</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
