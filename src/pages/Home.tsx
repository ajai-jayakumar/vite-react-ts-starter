import useStore from '@/store';

export default function Home() {
  const { message } = useStore();
  return <h1>{message}</h1>;
}
