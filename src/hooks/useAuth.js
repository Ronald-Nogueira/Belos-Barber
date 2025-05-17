import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../contexts/authContext';

const useAuth = () => {
  const { usuario } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (usuario === null) {
      router.push('/login');
    }
  }, [usuario, router]);

  return { usuario };
};

export default useAuth;