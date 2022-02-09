import { useRouter } from "next/router";
import { DICTIONARIES } from "../constants";

function useTranslate() {
  const { query: { locale = "en" } } = useRouter();
  const dictionary = DICTIONARIES[locale];

  return {
    translate: (key) => dictionary[key],
    dictionary,
  };
}

export default useTranslate;
