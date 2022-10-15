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
import thumbOrakel from "../public/book/Optimized-Taigru-cover-vorne-143.jpg";
import thumbSpieglein from "../public/book/spieglein.jpg";
import thumbMK1 from "../public/book/mondkanalErdschichten.jpg";
import thumbMK2 from "../public/book/mondkanalWeisheit.jpg";
import thumb2MK from "../public/book/zweitermondkanal.jpg";

const Works = () => (
  <Layout title="Projekte">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Meine Bücher
      </Heading>
      <Section>
        {/* <NextLink href="/" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Zurück
            </Button>
          </NextLink> */}
        {/* <WorkGridItem
          id="carterportfolio"
          title="Portfolio Dr. Herman Carter"
          thumbnail={}
        >
          Portfolio für Dr. Herman Carter, einen fiktionalen Arzt. Steckbrief
          sowie eine Übersicht über seine Produkte.
        </WorkGridItem> */}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <WorkGridItem
            id="sozialetrinitaet"
            title="Soziale Trinität"
            thumbnail={thumbTrinitaet}
          >
            "EXPOSEÉ"
          </WorkGridItem>
          <WorkGridItem id="toso" title="Toso" thumbnail={thumbToso}>
            "EXPOSEÉ"
          </WorkGridItem>
          <WorkGridItem
            id="taigru"
            title="Taigru Orakel"
            thumbnail={thumbOrakel}
          >
            "EXPOSEÉ"
          </WorkGridItem>
          <WorkGridItem
            id="spieglein"
            title="Spieglein, Spieglein an der Wand, was passiert denn nur in unserem Land?"
            thumbnail={thumbSpieglein}
          >
            "EXPOSEÉ"
          </WorkGridItem>
          <WorkGridItem
            id="mondkanalerdschichten"
            title="Gefangen im Mondkanal - Die neun Erdschichten"
            thumbnail={thumbMK1}
          >
            "EXPOSEÉ"
          </WorkGridItem>
          <WorkGridItem
            id="mondkanalweisheit"
            title="Gefangen im Mondkanal - Neuen Weisheit"
            thumbnail={thumbMK2}
          >
            "EXPOSEÉ"
          </WorkGridItem>
          <WorkGridItem
            id="zweitermondkanal"
            title="Im zweiten Mondkanal"
            thumbnail={thumb2MK}
          >
            "EXPOSEÉ"
          </WorkGridItem>
          <WorkGridItem
            id="michaeldorn"
            title="Michael Dorn und die Mächte der Magie"
          >
            "EXPOSEÉ"
          </WorkGridItem>
        </SimpleGrid>
      </Section>
      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="walknote"
              title="walknote"
              thumbnail={thumbWalknote}
            >
              Music recommendation app for iOS
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem
              id="fourpainters"
              title="The four painters"
              thumbnail={thumbFourPainters}
            >
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
              A website of the elite app development and contracting agency based
              in Austria
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="modetokyo"
              thumbnail={thumbModeTokyo}
              title="mode.tokyo"
            >
              The mode magazine for understanding to personally enjoy Japan
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
              A VR Creative tools for fashion brands
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.4}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Old works
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.5}>
            <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
              Twitter client app for iPhone Safari
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="freedbtagger"
              thumbnail={thumbFreeDBTagger}
              title="freeDBTagger"
            >
              Automatic audio file tagging tool using FreeDB for Windows
            </WorkGridItem>
          </Section>
          <Section delay={0.6}>
            <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
              P2P private file sharing tool with MSN Messenger integration for
              Windows
            </WorkGridItem>
          </Section>
        </SimpleGrid> */}
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
