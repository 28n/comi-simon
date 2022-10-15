import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Comi Simon. All Rights Reserved. <br />
      developed by{" "}
      <a href="https://www.samsierra.de" target="_blank">
        Sam Sierra
      </a>
    </Box>
  );
};

export default Footer;
