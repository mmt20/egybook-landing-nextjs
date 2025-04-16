import { Text, Icon, Flex } from "@chakra-ui/react";

interface TitlePart {
  text: string;
  color: string;
  fontWeight: string;
  italic?: boolean;
}

interface IProps {
  icon: React.ElementType;
  titleParts: TitlePart[];
  description: string;
}

const FeatureCard = ({ icon, titleParts, description }: IProps) => (
  <Flex direction="column" align="flex-start">
    <Icon as={icon} boxSize={14} color="#30A46C" mb={6} />

    <Flex mb={3} wrap="wrap" fontSize="xl">
      {titleParts.map((part, index) => (
        <Text
          key={index}
          color={part.color}
          fontWeight={part.fontWeight}
          fontStyle={part.italic ? "italic" : "normal"}
          mr={index < titleParts.length - 1 ? 2 : 0}
        >
          {part.text}
        </Text>
      ))}
    </Flex>

    <Text maxW="330px" color="gray.300" fontWeight={500} fontSize="md" lineHeight="1.6">
      {description}
    </Text>
  </Flex>
);

export default FeatureCard;
