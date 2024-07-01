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
import { FaEnvelope, FaLock, FaUser, FaUserSecret } from "react-icons/fa";

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignUpModal({ isOpen, onClose }: SignUpModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sign Up</ModalHeader>
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
              <Input variant={"filled"} placeholder="Name" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gr.500"}>
                    <FaEnvelope />
                  </Box>
                }
              />
              <Input variant={"filled"} placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={
                  <Box color={"gr.500"}>
                    <FaUserSecret />
                  </Box>
                }
              />
              <Input variant={"filled"} placeholder="UserId" />
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
            Sign Up
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
