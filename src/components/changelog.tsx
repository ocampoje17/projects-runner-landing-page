import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { releases } from "@/lib/releases";

export function Changelog() {
  const { t, i18n } = useTranslation();
  const dateFormatter = new Intl.DateTimeFormat(i18n.resolvedLanguage === "en" ? "en-US" : "vi-VN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <section id="changelog" aria-labelledby="changelog-title" className="section-shell py-12 lg:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h2 id="changelog-title" className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t("changelog.title")}
          </h2>
          <p className="mt-2 text-xs text-muted-foreground sm:text-sm">{t("changelog.description")}</p>
        </div>
        <a
          href="https://github.com/ocampoje17/projects-runner-app/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded text-xs text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          {t("changelog.viewAll")}
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>

      <ol className="ml-2 border-l border-border pl-6 sm:pl-8">
        {releases.slice(0, 5).map((release, index) => (
          <li key={release.version} className="relative pb-8 last:pb-0">
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-[calc(1.5rem+5.5px)] top-6 h-2.5 w-2.5 rounded-full border-2 border-background ring-4 ring-background sm:-left-[calc(2rem+5.5px)]",
                index === 0 ? "bg-primary" : "bg-muted-foreground",
              )}
            />
            <article className={cn("rounded-lg border bg-card p-5 sm:p-6", index === 0 ? "border-primary/40" : "border-border")}>
              <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                <a
                  href={`https://github.com/ocampoje17/projects-runner-app/releases/tag/app-v${release.version}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded font-mono text-sm font-semibold text-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                  aria-label={t("changelog.releaseLink", { version: release.version })}
                >
                  {release.version}
                </a>
                {index === 0 && (
                  <span className="rounded border border-primary/25 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                    {t("changelog.latest")}
                  </span>
                )}
                <time dateTime={release.date} className="w-full text-xs text-muted-foreground sm:ml-auto sm:w-auto">
                  {dateFormatter.format(new Date(`${release.date}T00:00:00Z`))}
                </time>
              </div>
              <h3 className="text-sm font-semibold leading-relaxed text-foreground">
                {t(`changelog.releases.${release.key}.title`)}
              </h3>
              {"image" in release && (
                <img
                  src={release.image}
                  alt={t("changelog.featureImageAlt")}
                  width={1672}
                  height={941}
                  loading="lazy"
                  className="mt-4 mb-4 h-auto w-full rounded-md border border-border"
                />
              )}
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {(t(`changelog.releases.${release.key}.details`, { returnObjects: true }) as string[]).map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
