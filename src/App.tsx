import {
  ArrowRight,
  CheckCircle2,
  Download,
  FolderKanban,
  Github,
  Keyboard,
  Layers3,
  MonitorSmartphone,
  Play,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatedBadge } from "@/components/motion/animated-badge";
import {
  AnimatedToastStack,
  useAnimatedToastStack,
} from "@/components/motion/animated-toast-stack";
import { Button } from "@/components/motion/button/base";
import { MagneticButton } from "@/components/motion/button/magnetic";
import { StatefulButton } from "@/components/motion/button/stateful";
import { NumberTicker } from "@/components/motion/number-ticker";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SharedLayoutBg } from "@/components/motion/shared-layout-bg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/motion/tabs";
import { TextReveal } from "@/components/motion/text-reveal";
import { TextShimmer } from "@/components/motion/text-shimmer";
import { ThemeToggle } from "@/components/motion/theme-toggle";
import { TiltCard } from "@/components/motion/tilt-card";
import { Tooltip } from "@/components/motion/tooltip";
import { cn } from "@/lib/utils";

const REPOSITORY_URL = "https://github.com/ocampoje17/projects-runner-app";
const RELEASES_URL = "https://github.com/ocampoje17/projects-runner-app/releases";

function App() {
  const { t, i18n } = useTranslation();
  const [downloadState, setDownloadState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { toasts, showToast, dismissToast } = useAnimatedToastStack({
    limit: 3,
    defaultDuration: 4200,
  });

  const language = i18n.resolvedLanguage === "en" ? "en" : "vi";

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const navItems = [
    { href: "#features", label: t("nav.features") },
    { href: "#workflow", label: t("nav.workflow") },
    { href: "#preview", label: t("nav.preview") },
    { href: "#faq", label: t("nav.faq") },
  ];

  const metrics = [
    { label: t("metrics.projects"), value: 48, suffix: "+" },
    { label: t("metrics.commands"), value: 320, suffix: "+" },
    { label: t("metrics.saved"), value: 12, suffix: "s" },
  ];

  const features = [
    {
      icon: FolderKanban,
      title: t("features.projectFirstTitle"),
      body: t("features.projectFirstBody"),
    },
    {
      icon: TerminalSquare,
      title: t("features.commandLibraryTitle"),
      body: t("features.commandLibraryBody"),
    },
    {
      icon: Workflow,
      title: t("features.fasterLoopsTitle"),
      body: t("features.fasterLoopsBody"),
    },
    {
      icon: Settings2,
      title: t("features.personalPrefsTitle"),
      body: t("features.personalPrefsBody"),
    },
    {
      icon: ShieldCheck,
      title: t("features.privacyTitle"),
      body: t("features.privacyBody"),
    },
    {
      icon: Keyboard,
      title: t("features.dailyUseTitle"),
      body: t("features.dailyUseBody"),
    },
  ];

  const workflowSteps = [
    {
      title: t("workflow.step1Title"),
      detail: t("workflow.step1Body"),
    },
    {
      title: t("workflow.step2Title"),
      detail: t("workflow.step2Body"),
    },
    {
      title: t("workflow.step3Title"),
      detail: t("workflow.step3Body"),
    },
  ];

  const previewTabs = [
    {
      value: "projects",
      label: t("preview.projectsTab"),
      title: t("preview.projectsTitle"),
      body: t("preview.projectsBody"),
      chips: [t("preview.projectsChip1"), t("preview.projectsChip2"), t("preview.projectsChip3")],
    },
    {
      value: "commands",
      label: t("preview.commandsTab"),
      title: t("preview.commandsTitle"),
      body: t("preview.commandsBody"),
      chips: [t("preview.commandsChip1"), t("preview.commandsChip2"), t("preview.commandsChip3")],
    },
    {
      value: "runtime",
      label: t("preview.runtimeTab"),
      title: t("preview.runtimeTitle"),
      body: t("preview.runtimeBody"),
      chips: [t("preview.runtimeChip1"), t("preview.runtimeChip2"), t("preview.runtimeChip3")],
    },
  ];

  const faqs = [
    {
      q: t("faq.whatIsQ"),
      a: t("faq.whatIsA"),
    },
    {
      q: t("faq.whoIsItForQ"),
      a: t("faq.whoIsItForA"),
    },
    {
      q: t("faq.cloudQ"),
      a: t("faq.cloudA"),
    },
    {
      q: t("faq.platformsQ"),
      a: t("faq.platformsA"),
    },
  ];

  const handleDownload = () => {
    if (downloadState === "loading") return;

    setDownloadState("loading");
    showToast({
      title: t("toasts.openingTitle"),
      description: t("toasts.openingDescription"),
      status: "loading",
    });

    const openedWindow = window.open(RELEASES_URL, "_blank", "noopener,noreferrer");
    if (!openedWindow) {
      setDownloadState("error");
      showToast({
        title: t("toasts.errorTitle"),
        description: t("toasts.errorDescription"),
        status: "error",
      });
      window.setTimeout(() => setDownloadState("idle"), 2200);
      return;
    }

    setDownloadState("success");
    showToast({
      title: t("toasts.successTitle"),
      description: t("toasts.successDescription"),
      status: "success",
    });
    window.setTimeout(() => setDownloadState("idle"), 1800);
  };

  const openRepository = () => {
    window.open(REPOSITORY_URL, "_blank", "noopener,noreferrer");
  };

  const switchLanguage = (nextLanguage: "vi" | "en") => {
    void i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_55%)]" />

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/app-icon.png"
              alt="Projects Runner"
              className="h-9 w-9 rounded-xl border border-border object-cover shadow-[0_0_0_1px_rgba(56,189,248,0.15)]"
            />
            <div>
              <div className="text-sm font-semibold tracking-tight">Projects Runner</div>
              <div className="text-[11px] text-muted-foreground">{t("header.tagline")}</div>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            <SharedLayoutBg
              className="flex w-auto flex-row items-center gap-1 rounded-full border border-border/70 bg-card/50 p-1"
              pillClassName="rounded-full bg-primary/12"
              inset={4}
            >
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative z-10 rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </SharedLayoutBg>
          </nav>

          <div className="flex items-center gap-2">
            <div
              className="inline-flex items-center gap-1 rounded-full border border-border bg-card/70 p-1"
              aria-label={t("footer.languageToggle")}
            >
              {(["vi", "en"] as const).map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => switchLanguage(locale)}
                  aria-pressed={language === locale}
                  title={locale === "vi" ? "Tiếng Việt" : "English"}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                    language === locale
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {locale}
                </button>
              ))}
            </div>
            <ThemeToggle
              variant="circle"
              start="top-right"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
            />
            <Button variant="secondary" size="sm" className="hidden sm:inline-flex" onClick={openRepository}>
              <Github className="h-4 w-4" />
              {t("header.github")}
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="section-shell grid items-center gap-12 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24 lg:pt-20">
          <div className="space-y-7">
            <ScrollReveal>
              <AnimatedBadge
                pulse
                icon={<Sparkles className="h-3.5 w-3.5" />}
                className="border border-primary/20 bg-primary/10 text-primary"
              >
                {t("hero.badge")}
              </AnimatedBadge>
            </ScrollReveal>

            <div className="space-y-4">
              <TextReveal
                as="h1"
                text={t("hero.title")}
                className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
                whileInView
                split="word"
              />
              <ScrollReveal delay={0.08}>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  {t("hero.description")}
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12} className="flex flex-wrap items-center gap-3">
              <StatefulButton
                state={downloadState}
                onClick={handleDownload}
                size="lg"
                ripple
                icon={<Download className="h-4 w-4" />}
                loadingText={t("hero.downloadLoading")}
                successText={t("hero.downloadSuccess")}
                errorText={t("hero.downloadError")}
              >
                {t("hero.download")}
              </StatefulButton>
              <MagneticButton
                variant="secondary"
                size="lg"
                onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.explore")}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </ScrollReveal>

            <ScrollReveal delay={0.16} className="grid grid-cols-3 gap-3 sm:max-w-lg">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass-panel rounded-2xl px-3 py-3 text-center sm:px-4"
                >
                  <div className="text-xl font-semibold tracking-tight sm:text-2xl">
                    <NumberTicker value={metric.value} />
                    <span className="text-sm text-muted-foreground"> {metric.suffix}</span>
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    {metric.label}
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1}>
            <TiltCard className="glass-panel relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_40%)]" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {t("workspaceCard.eyebrow")}
                    </div>
                    <div className="mt-1 text-lg font-semibold">{t("workspaceCard.title")}</div>
                  </div>
                  <AnimatedBadge
                    icon={<span className="h-1.5 w-1.5 rounded-full bg-success" />}
                    className="border border-success/20 bg-success/10 text-success"
                  >
                    {t("workspaceCard.ready")}
                  </AnimatedBadge>
                </div>

                <div className="grid gap-3">
                  {[
                    { name: t("workspaceCard.install"), cmd: "npm install", tone: "idle" },
                    { name: t("workspaceCard.dev"), cmd: "npm run dev", tone: "running" },
                    { name: t("workspaceCard.typecheck"), cmd: "npm run build", tone: "success" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/50 px-3 py-3"
                    >
                      <div>
                        <div className="text-sm font-medium">{row.name}</div>
                        <div className="font-mono text-xs text-muted-foreground">{row.cmd}</div>
                      </div>
                      <Tooltip content={row.tone === "running" ? t("workspaceCard.stopProcess") : t("workspaceCard.runCommand")}>
                        <Button
                          size="icon"
                          variant={row.tone === "running" ? "primary" : "secondary"}
                          className={cn(
                            "h-9 w-9",
                            row.tone === "running" && "bg-success text-background hover:bg-success/90",
                          )}
                        >
                          {row.tone === "running" ? (
                            <span className="h-2.5 w-2.5 rounded-[3px] bg-current" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </Button>
                      </Tooltip>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border bg-[#071018] p-4 font-mono text-xs text-slate-300 shadow-inner">
                  <div className="mb-2 flex items-center gap-2 text-[11px] text-slate-500">
                    <TerminalSquare className="h-3.5 w-3.5" />
                    {t("workspaceCard.terminal")} · {t("workspaceCard.title")}
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-sky-400">$</span> npm run dev
                    </div>
                    <div className="text-emerald-400">VITE ready in 214 ms</div>
                    <div className="text-slate-400">Local: http://localhost:6810/</div>
                    <div className="text-sky-300">
                      <TextShimmer className="bg-[linear-gradient(110deg,#64748b_30%,#e2e8f0_50%,#64748b_70%)]">
                        {t("workspaceCard.watching")}
                      </TextShimmer>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </section>

        <section id="features" className="section-shell py-16 lg:py-20">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <AnimatedBadge
              icon={<Zap className="h-3.5 w-3.5 text-primary" />}
              className="mx-auto mb-4 border border-border bg-card text-muted-foreground"
            >
              {t("features.badge")}
            </AnimatedBadge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("features.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t("features.description")}
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.04}>
                <TiltCard className="glass-panel h-full rounded-3xl p-5">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.body}</p>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="workflow" className="section-shell py-8 lg:py-12">
          <div className="glass-panel overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <ScrollReveal>
                <AnimatedBadge
                  icon={<Layers3 className="h-3.5 w-3.5 text-primary" />}
                  className="mb-4 border border-border bg-background/50 text-muted-foreground"
                >
                  {t("workflow.badge")}
                </AnimatedBadge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {t("workflow.title")}
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  {t("workflow.description")}
                </p>
              </ScrollReveal>

              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <ScrollReveal key={step.title} delay={index * 0.05}>
                    <div className="rounded-3xl border border-border bg-background/45 p-4 sm:p-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-sm font-semibold text-primary-foreground">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">{step.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{step.detail}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="preview" className="section-shell py-16 lg:py-20">
          <ScrollReveal className="mb-8 max-w-2xl">
            <AnimatedBadge
              icon={<MonitorSmartphone className="h-3.5 w-3.5 text-primary" />}
              className="mb-4 border border-border bg-card text-muted-foreground"
            >
              {t("preview.badge")}
            </AnimatedBadge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("preview.title")}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {t("preview.description")}
            </p>
          </ScrollReveal>

          <Tabs defaultValue="projects" className="space-y-5">
            <TabsList className="flex flex-wrap gap-1 rounded-full border border-border bg-card/70 p-1">
              {previewTabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-full px-4 py-2 text-sm"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {previewTabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                  <div className="glass-panel rounded-[1.75rem] p-6">
                    <h3 className="text-2xl font-semibold tracking-tight">{tab.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                      {tab.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tab.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <TiltCard className="glass-panel rounded-[1.75rem] p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="text-sm font-medium">{tab.label}</div>
                      <AnimatedBadge
                        icon={<span className="h-1.5 w-1.5 rounded-full bg-current" />}
                        className="border border-primary/20 bg-primary/10 text-primary"
                      >
                        {t("workspaceCard.ready")}
                      </AnimatedBadge>
                    </div>
                    <div className="space-y-3">
                      {Array.from({ length: 4 }).map((_, index) => (
                        <div
                          key={`${tab.value}-${index}`}
                          className="flex items-center justify-between rounded-2xl border border-border bg-background/50 px-3 py-3"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400/30 to-indigo-500/20" />
                            <div>
                              <div className="text-sm font-medium">
                                {tab.value === "projects"
                                  ? `${t("preview.workspaceLabel")} ${index + 1}`
                                  : tab.value === "commands"
                                    ? `${t("preview.commandLabel")} ${index + 1}`
                                    : `${t("preview.processLabel")} ${index + 1}`}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {tab.value === "runtime" ? t("preview.itemStreaming") : t("preview.itemReady")}
                              </div>
                            </div>
                          </div>
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                        </div>
                      ))}
                    </div>
                  </TiltCard>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section className="section-shell py-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-sky-500/15 via-card to-indigo-500/10 p-8 sm:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
              <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    {t("cta.title")}
                  </h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">
                    {t("cta.description")}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <StatefulButton
                    state={downloadState}
                    onClick={handleDownload}
                    size="lg"
                    icon={<Download className="h-4 w-4" />}
                    loadingText={t("hero.downloadLoading")}
                    successText={t("hero.downloadSuccess")}
                    errorText={t("hero.downloadError")}
                  >
                    {t("cta.download")}
                  </StatefulButton>
                  <Button variant="secondary" size="lg" onClick={openRepository}>
                    <Github className="h-4 w-4" />
                    {t("cta.source")}
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="faq" className="section-shell py-16 lg:py-20">
          <ScrollReveal className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t("faq.title")}</h2>
            <p className="mt-3 text-muted-foreground">
              {t("faq.description")}
            </p>
          </ScrollReveal>
          <div className="grid gap-3 md:grid-cols-2">
            {faqs.map((item, index) => (
              <ScrollReveal key={item.q} delay={index * 0.04}>
                <div className="glass-panel h-full rounded-3xl p-5">
                  <h3 className="text-base font-semibold">{item.q}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70 py-8">
        <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src="/app-icon.png" alt="" className="h-8 w-8 rounded-lg border border-border object-cover" />
            <div>
              <div className="text-sm font-semibold">Projects Runner</div>
              <div className="text-xs text-muted-foreground">
                {t("footer.domain")}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{t("meta.languageLabel")}: {language.toUpperCase()}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <a
              href={REPOSITORY_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              {t("footer.repository")}
            </a>
            <span className="h-1 w-1 rounded-full bg-border" />
            <a
              href={RELEASES_URL}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              {t("footer.releases")}
            </a>
          </div>
        </div>
      </footer>

      <AnimatedToastStack
        toasts={toasts}
        onDismiss={dismissToast}
        position="bottom-right"
      />
    </div>
  );
}

export default App;
