import { useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { LanguageContext } from "./LanguageContext";
import { getDataByLang } from "../data";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useLocalStorage("lang", "tr");

  const toggleLang = () => {
    setLang((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const data = useMemo(() => getDataByLang(lang), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
}
