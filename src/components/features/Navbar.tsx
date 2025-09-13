import {
  Box,
  Container,
  Flex,
  Link,
  Button,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";
import { TiAdjustBrightness } from "react-icons/ti";
import { FiSun, FiMoon } from "react-icons/fi";

function NavLinks() {
  const { toggleColorMode } = useColorMode();
  // 依色彩模式調整 hover 背景與發光陰影
  const hoverBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const hoverShadow = useColorModeValue(
    "0 0 0 3px var(--chakra-colors-blue-300)",
    "0 0 0 3px var(--chakra-colors-blue-500)"
  );
  const icon = useColorModeValue(<FiSun />, <FiMoon />);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Project" },
    { href: "/blogs", label: "Blog" },
  ];

  return (
    <HStack gap={6}>
      {links.map((l) => (
        <Link
          href={l.href}
          _active={{ transform: "translateY(1px)" }}
          _focusVisible={{ boxShadow: hoverShadow }}
          _hover={{ bg: hoverBg, boxShadow: hoverShadow }}
        >
          {l.label}
        </Link>
      ))}
      <Button
        variant="outline"
        onClick={toggleColorMode}
        _hover={{ bg: hoverBg, boxShadow: hoverShadow }}
        _active={{ transform: "translateY(1px)" }}
        _focusVisible={{ boxShadow: hoverShadow }}
      >
        {icon}
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
          <Link href="/" fontWeight="semibold" letterSpacing="wide">
            HC
          </Link>
          <Spacer />
          <NavLinks />
        </Flex>
      </Container>
    </Box>
  );
}
