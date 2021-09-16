import * as React from 'react';
import { PageContainer } from '../Components';
import {
  Input,
  Box,
  Text,
  Flex,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
  useToast,
  Checkbox,
  Stack,
} from '@chakra-ui/react';
import { Field, FieldProps, Formik, FormikValues } from 'formik';
import { array, object, string } from 'yup';
import { addWaitlist } from '../Firebase';
import { PHONE_REGEX, USER_ID } from '../Constants';
import { useState, useEffect } from 'react';
import { WaitlistSuccess } from '../PageComponents/Home';
import Logo from '../Assets/Images/logo.svg';

type FormData = {
  name: string;
  email: string;
  phone: string;
  userType: string[];
};

const HomePage: React.FC = () => {
  const toast = useToast();
  const [userId, setUserId] = useState<string>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setUserId(localStorage.getItem(USER_ID) || undefined);
  }, []);

  const signupSchema = object().shape({
    email: string().email().required('Email is required'),
    phone: string()
      .required('Phone is required')
      .matches(PHONE_REGEX, 'Phone number is not valid'),
    name: string().required('Name is required'),
    userType: array(),
  });

  const handleSubmit = async (
    values: FormData,
    { setSubmitting }: FormikValues,
  ) => {
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
      setSubmitting(false);
    }
  };

  return (
    <PageContainer>
      <Flex
        height="100vh"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
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
          <Box marginTop={8}>
            {userId ? (
              <WaitlistSuccess />
            ) : (
              <>
                <Text fontWeight="bold">Be the first to get access</Text>
                <Box marginTop={2}>
                  <Formik
                    initialValues={
                      {
                        email: '',
                        phone: '',
                        name: '',
                        userType: [],
                      } as FormData
                    }
                    onSubmit={handleSubmit}
                    validationSchema={signupSchema}
                  >
                    {(props) => (
                      <>
                        <Field name="name">
                          {({ field, form }: FieldProps) => (
                            <FormControl
                              isInvalid={Boolean(
                                form.errors.name && form.touched.name,
                              )}
                            >
                              <FormLabel htmlFor="name">Name</FormLabel>
                              <Input
                                {...field}
                                id="name"
                                placeholder="Chad Chaddington"
                              />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Box mt={2}>
                          <Field name="email">
                            {({ field, form }: FieldProps) => (
                              <FormControl
                                isInvalid={Boolean(
                                  form.errors.email && form.touched.email,
                                )}
                              >
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Input
                                  {...field}
                                  id="email"
                                  placeholder="chad@gmail.com"
                                />
                                <FormErrorMessage>
                                  {form.errors.email}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box mt={2}>
                          <Field name="phone">
                            {({ field, form }: FieldProps) => (
                              <FormControl
                                isInvalid={Boolean(
                                  form.errors.phone && form.touched.phone,
                                )}
                              >
                                <FormLabel htmlFor="phone">Phone</FormLabel>
                                <Input
                                  {...field}
                                  id="phone"
                                  placeholder="9163171234"
                                />
                                <FormErrorMessage>
                                  {form.errors.phone}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box mt={2}>
                          <FormLabel htmlFor="userType">You are a...</FormLabel>
                          <Stack
                            spacing={2}
                            alignItems="start"
                            textAlign="left"
                          >
                            <Field name="userType" value="host" type="checkbox">
                              {({ field }: FieldProps) => (
                                <FormControl>
                                  <Checkbox {...field}>Party Host</Checkbox>
                                </FormControl>
                              )}
                            </Field>
                            <Field
                              name="userType"
                              value="attendee"
                              type="checkbox"
                            >
                              {({ field }: FieldProps) => (
                                <FormControl>
                                  <Checkbox {...field}>Party Attendee</Checkbox>
                                </FormControl>
                              )}
                            </Field>
                            <Field
                              name="userType"
                              value="influencer"
                              type="checkbox"
                            >
                              {({ field }: FieldProps) => (
                                <FormControl>
                                  <Checkbox {...field}>Influencer</Checkbox>
                                </FormControl>
                              )}
                            </Field>
                          </Stack>
                        </Box>
                        <Button
                          mt={6}
                          colorScheme="blue"
                          type="submit"
                          isDisabled={!props.isValid}
                          isLoading={loading}
                          onClick={() => props.handleSubmit()}
                        >
                          Submit
                        </Button>
                      </>
                    )}
                  </Formik>
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
