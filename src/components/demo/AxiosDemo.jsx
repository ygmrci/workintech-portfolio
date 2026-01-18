import { useContext, useMemo, useState } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { postWorkintech } from "../../api/reqres";

export default function AxiosDemo() {
  const { lang, data } = useContext(LanguageContext);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const payload = useMemo(() => {
    const hero = data?.heroSection;

    return {
      locale: lang,
      name: hero?.name,
      greeting: hero?.greeting,
      headline: `${hero?.headline ?? ""} ${hero?.headline2 ?? ""}`.trim(),
      source: "portfolio",
    };
  }, [lang, data]);

  const handlePost = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await postWorkintech(payload);
      setResult(res);
    } catch (e) {
      const msg =
        e?.response?.data?.error ||
        e?.response?.status?.toString() ||
        e?.message ||
        "Request failed";
      setError(msg);
      console.log("AXIOS ERROR:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6 md:px-12">
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-xl font-semibold">Axios Demo (Reqres POST)</h2>
        <p className="mt-2 text-sm opacity-80">
          Seçili dile göre payload hazırlanır ve Reqres API'ye POST atılır.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handlePost}
            disabled={loading}
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-60 dark:bg-white dark:text-zinc-900"
          >
            {loading ? "Gönderiliyor..." : "POST /users"}
          </button>

          <span className="text-xs opacity-70">
            Aktif dil: <b>{lang?.toUpperCase()}</b>
          </span>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 p-4 text-xs dark:border-zinc-800">
            <div className="mb-2 font-semibold">Payload</div>
            <pre className="overflow-auto whitespace-pre-wrap break-words">
              {JSON.stringify(payload, null, 2)}
            </pre>
          </div>

          <div className="rounded-xl border border-zinc-200 p-4 text-xs dark:border-zinc-800">
            <div className="mb-2 font-semibold">Response</div>

            {error ? (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
                {error}
              </div>
            ) : (
              <pre className="overflow-auto whitespace-pre-wrap break-words">
                {result
                  ? JSON.stringify(result, null, 2)
                  : "Henüz istek atılmadı."}
              </pre>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
