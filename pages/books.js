import {
  Container,
  Heading,
  Button,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { NextLink } from "next/link";
import { WorkGridItem } from "../components/grid-item";
import thumbTrinitaet from "../public/book/trinitaet.jpg";
import thumbToso from "../public/book/toso.jpg";
import thumbOrakel from "../public/book/Taigru.jpg";
import thumbSpieglein from "../public/book/spieglein.jpg";
import thumbMK1 from "../public/book/mondkanalErdschichten.jpg";
import thumbMK2 from "../public/book/mondkanalWeisheit.jpg";
import thumb2MK from "../public/book/zweitermondkanal.jpg";
import thumbDorn from "../public/book/MichaelDorn.jpg";

const Works = () => (
  <Layout title="Projekte">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Meine Bücher
      </Heading>
      <Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkGridItem
            id="sozialetrinitaet"
            title="Soziale Trinität"
            thumbnail={thumbTrinitaet}
          >
            Ein Einblick in das Versagen der Marktwirtsachft und die Selbstzerstörung der EU
          </WorkGridItem>
          <WorkGridItem 
            id="toso" 
            title="Toso" 
            thumbnail={thumbToso}
          >
            Im vierten Jahrtausend kämpfen Menschen gegen Androiden, die durch eine gezielte Verseuchung der Nahrungsmittel die Menschengruppen (Meats, Vegis und Prans) zwangen, auch sich gegenseitig zu bekämpfen, um zu überleben.
          </WorkGridItem>
          <WorkGridItem
            id="taigru"
            title="Taigru Orakel"
            thumbnail={thumbOrakel}
          >
            Das Orakel verbindet die spirituellen Weisheiten des Tarot, I Ging und der Runen, doch In diesem Buch werden jedoch weder Tarotkarten noch Münzen oder Runensteine für eine Orakelbefragung benötigt.
          </WorkGridItem>
          <WorkGridItem
            id="spieglein"
            title="Spieglein"
            thumbnail={thumbSpieglein}
          >
            Ein Buch als Spiegelbild unserer Gesellschaft, eine Fibel für Politiker und diejenigen, die sich betroffen fühlen.
          </WorkGridItem>
          <WorkGridItem
            id="mondkanalerdschichten"
            title="Gefangen im Mondkanal - Die neun Erdschichten"
            thumbnail={thumbMK1}
          >
            Der Weg durch neun Erdschichten zum Kern des Bösen verlangt die Überwindung einiger Tore mit ihren Rätseln, die Tod oder Leben bedeuten, wobei der junge Magier Michael Dorn gegen Schwarzmagier, Polizisten und Kriminellen in den höllischen Abgrund zu kämpfen hat.
          </WorkGridItem>
          <WorkGridItem
            id="mondkanalweisheit"
            title="Gefangen im Mondkanal - Neuen Weisheit"
            thumbnail={thumbMK2}
          >
            Der Weg durch neun Erdschichten zum Kern des Bösen verlangt die Überwindung einiger Tore mit ihren Rätseln, die Tod oder Leben bedeuten (die Tore der Weisheit, aber auch der teuflischen List), doch am Ende des Weges winkt ein Mysterium – der Heilige Gral.
          </WorkGridItem>
          <WorkGridItem
            id="zweitermondkanal"
            title="Im zweiten Mondkanal"
            thumbnail={thumb2MK}
          >
            In dieser Erzählung wird die Unbefleckte Empfängnis von Maria neu interpretiert, die faszinierende Symbolik in Da Vincis berühmtem Fresko ‚Das Letzte Abendmahl‘, aber auch auf das Verhältnis zwischen Jesus und Maria Magdalena und jenes zwischen Jesus und seinem Lieblingsjünger Johannes beleuchtet. 
          </WorkGridItem>
          <WorkGridItem
            id="michaeldorn"
            title="Michael Dorn und die Mächte der Magie"
            thumbnail={thumbDorn}
          >
            Michael ist ein seltsamer Junge, dessen sechster Sinn ihn auf eine merkwürdige Weise in eine geheime Magieschule in eine Burg führt, und hier muss sich Michael und seine Getreuen nicht nur gegen die Mitschüler des linken Orakels, sondern auch gegen die eigenen Lehrer und, nebenbei, gegen böse Naturgeister behaupten.
          </WorkGridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
