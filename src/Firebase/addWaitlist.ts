import { WaitlistUser } from '../Models';
import { waitlistCollection } from './Firebase';

const addWaitlist = async (user: Omit<WaitlistUser, 'createdAt'>) => {
  const existing = await waitlistCollection
    .where('email', '==', user.phone)
    .get();

  if (existing.docs.length !== 0) throw new Error('Email already exists!');

  return waitlistCollection.add({
    ...user,
    createdAt: Date.now().valueOf(),
  } as WaitlistUser);
};

export default addWaitlist;
