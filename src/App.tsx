import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

import Header from './components/Header';

interface FileObject {
  file?: string;
  emailTo: string;
  yourEmail: string;
  message: string;
}

export const App: React.FC = () => {
  const [payload, setPayload] = useState<FileObject>();

  const [emailTo, setEmailTo] = useState<string>('');
  const [yourEmail, setYourEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [file, setFile] = useState<string>('');

  const handleSubmit = () => {
    setPayload({
      file,
      emailTo,
      yourEmail,
      message,
    });
  };

  return (
    <Box bg="gray.50" w="100%" p={4} h="100vh">
      <Header />
      <Flex
        h="90%"
        maxWidth="300px"
        direction="row"
        alignItems="center"
        ml="3%"
      >
        <Card p={2}>
          <CardBody>
            <CardHeader>
              <div>Upload files</div>
            </CardHeader>
            <FormControl>
              <VStack spacing="10px">
                <Input isRequired type="file" />
                <Input
                  isRequired
                  type="email"
                  placeholder="Email to"
                  onChange={(e) => setEmailTo(e.target.value)}
                />
                <Input
                  isRequired
                  type="email"
                  placeholder="Your email"
                  onChange={(e) => setYourEmail(e.target.value)}
                />
                <Textarea
                  isRequired
                  placeholder="Massage"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button
                  w="100%"
                  colorScheme="blue"
                  onClick={() => handleSubmit()}
                >
                  Transfer
                </Button>
              </VStack>
            </FormControl>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
};
