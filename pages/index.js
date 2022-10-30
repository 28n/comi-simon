import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoFacebook,
} from "react-icons/io5";

import { AiOutlineAmazon } from "react-icons/ai";

import Image from "next/image";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Comi Simon
          </Heading>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/avatar.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Autor
        </Heading>
        <Paragraph>
          Heute bin ich als „comi simon“ bekannt und möchte mein Wissen und mein erworbenes Verständnis an geisteswissenschaftlichen Forschungsergebnissen, Magisch-spirituellem, sowie politisch sowie politisch Hintergründigem weitergeben. Aus dieser Gesinnung heraus erhalte ich Inspirationen für meine Bücher.

Ich bin ein sehr zielstrebiger, analytischer, ausdauernder und interessierter Mensch. Dies hat dazu geführt, dass ich seit meiner Kindheit diverse Werte und Ansichten hinterfrage und versuche, Antworten auf Lebensfragen zu finden . Natürlich bin ich, wie jeder andere auch, ein ewig Lernender. Daher beleuchte ich meine gewonnenen Erkenntnisse von möglichst allen Seiten und versuche damit, jede Einseitigkeit in meinen Betrachtungsweisen  zu vermeiden.

Mein Ziel ist es, all jenen Gedankenansätze zu liefern, die bereit sind, Themen zu hinterfragen. Natürlich freut es mich, diese Hintergründigkeit in unterhaltsame Romane zu verpacken. Das bereitet mir besonderes Vergnügen, da ich meiner Kreativität freien Lauf lassen kann.

Für mich sind Toleranz, Ehrlichkeit und Freiheit die entscheidenden Werte, die ich heute und hier leben kann, indem ich dem Ausdruck verleihen darf, was mich beschäftigt.

Mein Motto lautet: „Die Begegnung mit der Welt ist das Spiegelbild des eigenen Inneren.“
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/books" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Meine Bücher
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Ich ♥
        </Heading>
        <Paragraph>
          Lesen, Entdecken, Malen, Reisen, Schreiben, Spazieren gehen
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Wo man mich noch findet!
        </Heading>
        <List>
          <ListItem>
            <Link href="https://de-de.facebook.com/comi.simon" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @comi.simon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://mobile.twitter.com/comi_simon" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @comi_simon
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.amazon.de/s?i=digital-text&rh=p_27%3Acomi+simon&s=relevancerank&language=en&text=comi+simon&ref=dp_byline_sr_ebooks_1" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<AiOutlineAmazon />}
              >
                @comi simon
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from "../components/chakra";
