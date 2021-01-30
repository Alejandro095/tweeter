import { useRouter } from 'next/router';

export default function isSameUrl() {
  const router = useRouter();

  return (path, strict = false) => {
    if (path.endsWith('/') || !strict) {
      return path == router.pathname;
    } else {
      return router.pathname.indexOf(path) != -1;
    }
  };
}
