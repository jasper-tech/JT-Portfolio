import { FC } from "react";
import { Container, Text, Group, Anchor } from "@mantine/core";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <Container size="lg">
        <Group justify="center" gap="sm">
          <Text ta="center">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </Text>
          <Group gap="lg">
            <Anchor
              href="https://github.com/jasper-tech"
              target="_blank"
              className="hover:text-indigo-500"
            >
              GitHub
            </Anchor>
            <Anchor
              href="https://linkedin.com/in/afeawo-sandy"
              target="_blank"
              className="hover:text-indigo-500"
            >
              LinkedIn
            </Anchor>
            <Anchor
              href="mailto:sandyafeawo123@gmail.com"
              className="hover:text-indigo-500"
            >
              Email
            </Anchor>
          </Group>
        </Group>
      </Container>
    </div>
  );
};

export default Footer;
