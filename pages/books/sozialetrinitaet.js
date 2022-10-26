import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Soziale Trinität">
    <Container>
      <Title>
        Soziale Trinität <Badge>Jahr</Badge>
      </Title>
      <P>
        Beschreibung
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.hermancarter.de/">
            https://www.hermancarter.de/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Plattform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, Chakra-UI, Framer Motion</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/carterPortfolioProdukte.png" alt="Portfolio" />
      <WorkImage src="/images/projects/carterPortfolioBuecher.png" alt="Portfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
