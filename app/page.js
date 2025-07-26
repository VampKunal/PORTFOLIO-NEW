import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/hero');
  return null;
}
