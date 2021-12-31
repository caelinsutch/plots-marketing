import * as React from 'react';
import { PageContainer } from '../Components';
import { Box, Text, Flex, Button, useToast } from '@chakra-ui/react';
import { addWaitlist } from '../Firebase';
import { USER_ID } from '../Constants';
import { useState, useEffect } from 'react';
import { SignupFormData, WaitlistSuccess } from '../PageComponents/Home';
import Logo from '../Assets/Images/logo.svg';
import { useForm } from 'react-hook-form';
import { SignupForm } from '../PageComponents';

const HomePage: React.FC = () => {
  const toast = useToast();
  const [userId, setUserId] = useState<string>();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  useEffect(() => {
    setUserId(localStorage.getItem(USER_ID) || undefined);
  }, []);

  const onSubmit = async (values: SignupFormData) => {
    try {
      setLoading(true);
      const res = await addWaitlist(values);
      localStorage.setItem(USER_ID, res.id);
      setUserId(res.id);
      toast({
        status: 'success',
        title: 'Added to Waitlist!',
      });
    } catch (e) {
      console.error(e);
      toast({
        status: 'error',
        title: 'Error adding to waitlist!',
        description: e.toString(),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <Flex width="100%" alignItems="center" justifyContent="center" mt={4}>
        <Box textAlign="center">
          <Box mx="auto">
            <Logo
              style={{
                width: '150px',
                height: 'fit-content',
                marginRight: 'auto',
                marginLeft: 'auto',
              }}
            />
          </Box>
          <Text fontSize="6xl" fontWeight="bold" as="h1">
            Plots
          </Text>
          <Text fontSize="2xl" fontWeight="semibold" as="h2">
            Host and attend local parties.
          </Text>
          <Box marginTop={8} px={4}>
            {userId ? (
              <WaitlistSuccess />
            ) : (
              <>
                <Text fontWeight="bold">Be the first to get access</Text>
                <Box marginTop={2}>
                  <SignupForm errors={errors} register={register} />
                  <Button
                    my={6}
                    colorScheme="blue"
                    type="submit"
                    isDisabled={Object.keys(errors).length > 0}
                    isLoading={loading}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Flex>
    </PageContainer>
  );
};

export default HomePage;
