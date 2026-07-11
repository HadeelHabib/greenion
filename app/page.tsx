import GreenIonSite from "./solarlanding";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string | string[] | undefined }>;
}) {
  const { lang } = await searchParams;
  const langKey = lang === "en" ? "en" : "ar";

  return <GreenIonSite lang={langKey} />;
}
