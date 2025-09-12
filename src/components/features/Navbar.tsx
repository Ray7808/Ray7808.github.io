import {
  Box,
  Container,
  Flex,
  Link as CLink,
  Button,
  HStack,
  Spacer,
} from "@chakra-ui/react";

import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";

function NavLinks() {
  const { toggleColorMode } = useColorMode();

  return (
    <HStack gap={6}>
      <CLink href="" _hover={{ textDecoration: "none" }}>
        Home
      </CLink>
      <CLink href="about" _hover={{ textDecoration: "none" }}>
        About
      </CLink>
      <CLink href="project" _hover={{ textDecoration: "none" }}>
        Project
      </CLink>
      <CLink href="blog" _hover={{ textDecoration: "none" }}>
        Blog
      </CLink>

      <Button variant="outline" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </HStack>
  );
}

export default function Navbar() {
  const bg = useColorModeValue("bg", "bg"); // v3 的語意色票
  const border = useColorModeValue("gray.200", "whiteAlpha.300");
  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg={bg}
      borderBottomWidth="1px"
      borderColor={border}
      backdropFilter="saturate(180%) blur(6px)"
    >
      <Container maxW="6xl" py={3}>
        <Flex align="center" gap={6}>
          <CLink href="#home" fontWeight="semibold" letterSpacing="wide">
            Ray
          </CLink>
          <Spacer />
          <NavLinks />
        </Flex>
      </Container>
    </Box>
  );
}
