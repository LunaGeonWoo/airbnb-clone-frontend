import {
  Box,
  Button,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import SocialLogin from "./SocialLogin";
import { FaLock, FaUser } from "react-icons/fa";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gr.500"}>
                    <FaUser />
                  </Box>
                }
              />
              <Input variant={"filled"} placeholder="Username" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gr.500"}>
                    <FaLock />
                  </Box>
                }
              />
              <Input variant={"filled"} placeholder="Password" />
            </InputGroup>
          </VStack>
          <Button colorScheme="red" width={"100%"}>
            Log In
          </Button>
          <HStack my="6">
            <Divider />
            <Text
              textTransform={"uppercase"}
              fontSize="xs"
              as="b"
              color="grey.400"
            >
              or
            </Text>
            <Divider />
          </HStack>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
