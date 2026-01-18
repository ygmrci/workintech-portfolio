import dataTR from "./data.tr";
import dataEN from "./data.en";

export function getDataByLang(lang) {
  return lang === "tr" ? dataTR : dataEN;
}
