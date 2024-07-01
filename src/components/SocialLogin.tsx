import { Box, Button, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      {" "}
      <VStack>
        <Button width={"100%"} leftIcon={<FaGithub />} colorScheme={"telegram"}>
          Continue with Github
        </Button>
        <Button width={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
