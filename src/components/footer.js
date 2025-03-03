import { Container, Text, Group, Anchor } from "@mantine/core";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-6">
      <Container size="lg">
        <Group position="center" direction="column" spacing="sm">
          <Text align="center">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </Text>
          <Group spacing="lg">
            <Anchor
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-indigo-500"
            >
              GitHub
            </Anchor>
            <Anchor
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-indigo-500"
            >
              LinkedIn
            </Anchor>
            <Anchor
              href="mailto:youremail@example.com"
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
