import { Text, Icon, Flex } from "@chakra-ui/react";

interface IProps {
  icon: React.ElementType;
  titlePart1: string;
  titlePart2: string;
  titlePart3: string;
  description: string;
}

const FeatureCard = ({ icon, titlePart1, titlePart2, titlePart3, description }: IProps) => (
  <Flex direction="column" align={"flex-start"}>
    <Icon as={icon} boxSize={"14"} color="#30A46C" mb={6} />
    <Flex mb={3} direction="row" align="center" flexWrap="wrap">
      <Text fontSize="xl" fontWeight="semibold" color="#D2AC71" mr={2}>
        {titlePart1}
      </Text>
      <Text fontSize="xl" fontWeight="semibold" color="#30A46C" mr={2}>
        {titlePart2}
      </Text>
      <Text fontSize="xl" fontWeight="semibold" color="white">
        {titlePart3}
      </Text>
    </Flex>
    <Text maxW={"330px"} widows={300} color="gray.300" fontWeight={500}>
      {description}
    </Text>
  </Flex>
);

export default FeatureCard;
