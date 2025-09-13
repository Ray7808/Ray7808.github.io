import { Box, Heading } from "@chakra-ui/react";
import md from "@/components/datas/publications.md?raw";

type Group = { year: string; items: string[]; start: number };

function groupByYear(text: string): Group[] {
  const lines = text.split(/\r?\n/);
  const headingRe = /^\s*#\s+(\d{4})\s*$/;
  const itemRe = /^\s*-\s+(.+?)\s*$/;

  const out: Group[] = [];
  let current: Group | null = null;
  let idx = 1; // 全域連續編號

  for (const line of lines) {
    const h = headingRe.exec(line);
    if (h) {
      current = { year: h[1], items: [], start: idx };
      out.push(current);
      continue;
    }
    const m = itemRe.exec(line);
    if (m) {
      if (!current) {
        current = { year: "Others", items: [], start: idx };
        out.push(current);
      }
      current.items.push(m[1].trim());
      idx += 1;
    }
  }
  return out.filter((g) => g.items.length > 0);
}

export default function Publications() {
  const groups = groupByYear(md);
  return (
    <>
      {groups.map((g) => (
        <Box key={g.year} mb={6} maxW="3xl" py={4} ml={5}>
          <Heading size="md" mb={2}>
            {g.year}
          </Heading>
          <ol start={g.start} style={{ paddingInlineStart: "1.25rem" }}>
            {g.items.map((txt, i) => (
              <li>
                {g.start + i}. {txt}
              </li>
            ))}
          </ol>
        </Box>
      ))}
    </>
  );
}
