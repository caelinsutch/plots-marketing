import {
  AlertIcon,
  Alert,
  AlertDescription,
  AlertTitle,
} from '@chakra-ui/react';
import React from 'react';

const WaitlistSuccess: React.FC = () => (
  <Alert
    status="success"
    variant="subtle"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    textAlign="center"
    height="200px"
    borderRadius={2}
  >
    <AlertIcon boxSize="40px" mr={0} />
    <AlertTitle mt={4} mb={1} fontSize="lg">
      Thanks for Joining the Waitlist!
    </AlertTitle>
    <AlertDescription maxWidth="sm">
      We'll let you know when it's your turn to use Plots!
    </AlertDescription>
  </Alert>
);

export default WaitlistSuccess;
