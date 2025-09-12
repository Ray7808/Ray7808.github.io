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
  // 依色彩模式調整 hover 背景與發光陰影
  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const hoverShadow = useColorModeValue(
    "0 0 0 3px var(--chakra-colors-blue-300)",
    "0 0 0 3px var(--chakra-colors-blue-500)"
  );

  return (
    <HStack gap={6}>
      <CLink
        href="/"
        _hover={{ bg: hoverBg, boxShadow: hoverShadow }}
        _active={{ transform: "translateY(1px)" }}
        _focusVisible={{ boxShadow: hoverShadow }}
      >
        Home
      </CLink>
      <CLink
        href="about"
        _hover={{ bg: hoverBg, boxShadow: hoverShadow }}
        _active={{ transform: "translateY(1px)" }}
        _focusVisible={{ boxShadow: hoverShadow }}
      >
        About
      </CLink>
      <CLink
        href="projects"
        _hover={{ bg: hoverBg, boxShadow: hoverShadow }}
        _active={{ transform: "translateY(1px)" }}
        _focusVisible={{ boxShadow: hoverShadow }}
      >
        Project
      </CLink>
      <CLink
        href="blogs"
        _hover={{ bg: hoverBg, boxShadow: hoverShadow }}
        _active={{ transform: "translateY(1px)" }}
        _focusVisible={{ boxShadow: hoverShadow }}
      >
        Blog
      </CLink>

      <Button
        variant="outline"
        onClick={toggleColorMode}
        _hover={{ bg: hoverBg, boxShadow: hoverShadow }}
        _active={{ transform: "translateY(1px)" }}
        _focusVisible={{ boxShadow: hoverShadow }}
      >
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
          <CLink href="/" fontWeight="semibold" letterSpacing="wide">
            HC
          </CLink>
          <Spacer />
          <NavLinks />
        </Flex>
      </Container>
    </Box>
  );
}
