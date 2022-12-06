import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  let router = useRouter();

  useEffect(() => {
    router.replace('/events');
  }, [router]);

  return (
    <div>
      <p>Ideally you wont&apos;t be seeing this page</p>
    </div>
  );
}
