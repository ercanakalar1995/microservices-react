import Image from 'next/image';
import Link from 'next/link';

export default function Deneme() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h2>
        <Link href='/deneme'>Back to Deneme</Link>
      </h2>
      <div>deneme</div>
    </main>
  );
}
