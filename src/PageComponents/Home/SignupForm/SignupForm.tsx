import { Control } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import React from 'react';

export type SignupFormData = {
  name: string;
  email: string;
  phone: string;
  partyHost?: boolean;
  partyAttendee?: boolean;
  influencer?: boolean;
};

type SignupFormProps = {
  errors: FieldErrors<SignupFormData>;
  register: UseFormRegister<SignupFormData>;
};
const SignupForm: React.FC<SignupFormProps> = ({ errors, register }) => (
  <>
    <FormControl isInvalid={Boolean(errors.name)}>
      <FormLabel htmlFor="name">First name</FormLabel>
      <Input
        id="name"
        placeholder="name"
        {...register('name', {
          required: 'This is required',
        })}
      />
      <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={Boolean(errors.email)}>
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input
        id="email"
        placeholder="email"
        {...register('email', {
          required: 'This is required',
          pattern: /^\S+@\S+\.\S+$/,
        })}
      />
      <FormErrorMessage>
        {errors.email && errors.email.message}
      </FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={Boolean(errors.phone)}>
      <FormLabel htmlFor="email">Phone</FormLabel>
      <Input
        id="phone"
        placeholder="phone"
        {...register('phone', {
          required: 'This is required',
        })}
      />
      <FormErrorMessage>
        {errors.phone && errors.phone.message}
      </FormErrorMessage>
    </FormControl>
    <FormControl>
      <Stack spacing={2} alignItems="start" textAlign="left">
        <Checkbox {...register('partyHost')}>Party Host</Checkbox>
        <Checkbox {...register('partyAttendee')}>Party Attendee</Checkbox>
        <Checkbox {...register('influencer')}>Influencer</Checkbox>
      </Stack>
    </FormControl>
  </>
);

export default SignupForm;
