import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({element}) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname)
    element.scrollTo(0, 0);
  }, [pathname]);

  return null;
}