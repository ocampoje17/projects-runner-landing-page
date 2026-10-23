import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  FileCode,
  Folder,
  FolderKanban,
  FolderOpen,
  GitBranch,
  Github,
  KeyRound,
  Layers3,
  Mail,
  MonitorSmartphone,
  Play,
  RotateCcw,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Square,
  TerminalSquare,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnalyticsConsentDialog } from "@/components/analytics-consent-dialog";
import { Changelog } from "@/components/changelog";
import { AnimatedBadge } from "@/components/motion/animated-badge";
import { Button } from "@/components/motion/button/base";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/motion/tabs";
import { ThemeToggle } from "@/components/motion/theme-toggle";
import {
  enableGoogleAnalytics,
  readAnalyticsConsent,
  saveAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics";
import { cn } from "@/lib/utils";

const REPOSITORY_URL = "https://github.com/ocampoje17/projects-runner-app";
const RELEASES_URL = "https://github.com/ocampoje17/projects-runner-app/releases";
const EMAIL_URL = "mailto:namqhong@gmail.com";
const TELEGRAM_URL = "https://t.me/namhnz";
const RELEASE_LINK_CLASS =
  "inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground shadow-none transition-colors hover:bg-[#1692e8] active:bg-[#0062a3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background";

function App() {
  const { t, i18n } = useTranslation();
  const [analyticsConsent, setAnalyticsConsent] = useState<AnalyticsConsent | null>(() => readAnalyticsConsent());
  const [previewTab, setPreviewTab] = useState("overview");
  const [heroDevRunning, setHeroDevRunning] = useState(true);
  const [heroActiveProject, setHeroActiveProject] = useState<"projects-runner" | "api-server" | "docs-site">("projects-runner");

  const language = i18n.resolvedLanguage === "en" ? "en" : "vi";

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (analyticsConsent === "granted") {
      enableGoogleAnalytics();
    }
  }, [analyticsConsent]);

  const navItems = [
    { href: "#features", label: t("nav.features") },
    { href: "#workflow", label: t("nav.workflow") },
    { href: "#preview", label: t("nav.preview") },
    { href: "#faq", label: t("nav.faq") },
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
      icon: KeyRound,
      title: t("features.twofaVaultTitle"),
      body: t("features.twofaVaultBody"),
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

  const faqs = [
    {
      q: t("faq.whatIsQ"),
      a: t("faq.whatIsA"),
    },
    {
      q: t("faq.twofaQ"),
      a: t("faq.twofaA"),
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
      q: t("faq.backupQ"),
      a: t("faq.backupA"),
    },
    {
      q: t("faq.platformsQ"),
      a: t("faq.platformsA"),
    },
  ];

  const openRepository = () => {
    window.open(REPOSITORY_URL, "_blank", "noopener,noreferrer");
  };

  const handleAnalyticsDecision = (consent: AnalyticsConsent) => {
    saveAnalyticsConsent(consent);
    setAnalyticsConsent(consent);
  };

  const switchLanguage = (nextLanguage: "vi" | "en") => {
    void i18n.changeLanguage(nextLanguage);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground bg-[var(--background)]">
      {/* VS Code Titlebar / Navigation Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-[var(--vscode-activity,#181818)]">
        <div className="section-shell flex h-11 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
            {/* Window control dots */}
            <div className="hidden items-center gap-1.5 sm:flex">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <img
              src="/app-icon.png"
              alt="Projects Runner"
              className="h-5 w-5 rounded-[3px] border border-border/60 object-cover"
            />
            <div className="flex items-baseline gap-2">
              <div className="text-xs font-semibold tracking-tight text-foreground">Projects Runner</div>
              <div className="hidden font-mono text-[11px] text-muted-foreground md:inline">
                {t("header.tagline")}
              </div>
            </div>
          </a>

          {/* VS Code Command Center Navigation */}
          <nav className="hidden items-center md:flex">
            <div className="flex items-center gap-1 rounded-md border border-border bg-[var(--vscode-editor,#1e1e1e)] px-1 py-0.5 shadow-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-[var(--vscode-list-hover,rgba(255,255,255,0.06))] hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-1.5">
            {/* Language Switcher */}
            <div
              className="inline-flex items-center gap-0.5 rounded-md border border-border bg-[var(--vscode-editor,#1e1e1e)] p-0.5"
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
                    "rounded px-2 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors cursor-pointer",
                    language === locale
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {locale}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <ThemeToggle
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-[var(--vscode-editor,#1e1e1e)] text-foreground hover:bg-muted"
            />

            {/* GitHub Button */}
            <Button variant="secondary" size="sm" className="hidden rounded-md sm:inline-flex" onClick={openRepository}>
              <Github className="h-3.5 w-3.5" />
              {t("header.github")}
            </Button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="section-shell grid items-center gap-10 pb-14 pt-10 lg:grid-cols-[1.02fr_0.98fr] lg:pb-18 lg:pt-14">
          <div className="space-y-5">
            <AnimatedBadge
              icon={<Sparkles className="h-3 w-3" />}
              className="rounded-md border border-primary/30 bg-primary/10 font-mono text-xs text-primary"
            >
              {t("hero.badge")}
            </AnimatedBadge>

            <div className="space-y-3">
              <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                {t("hero.title")}
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={RELEASE_LINK_CLASS}
              >
                {t("hero.download")}
              </a>
              <Button
                variant="secondary"
                size="md"
                className="rounded-md"
                onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.explore")}
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Realistic VS Code Window Mockup */}
          <div className="vscode-editor-frame flex flex-col rounded-lg border border-border bg-[var(--vscode-editor,#1e1e1e)] p-0 shadow-2xl overflow-hidden">
            {/* Mockup Titlebar */}
            <div className="flex h-8 items-center justify-between border-b border-border bg-[var(--vscode-activity,#181818)] px-3 text-xs text-muted-foreground select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 rounded border border-border/80 bg-[var(--vscode-editor,#1e1e1e)] px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                  <Search className="h-2.5 w-2.5" />
                  <span>projects-runner · Quick Open</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <AnimatedBadge
                  icon={<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />}
                  className="h-5 rounded-[3px] border border-emerald-500/30 bg-emerald-500/10 px-1.5 font-mono text-[10px] text-emerald-400"
                >
                  {t("workspaceCard.ready")}
                </AnimatedBadge>
              </div>
            </div>

            {/* Main 3-Pane Body: Activity Bar + Sidebar (Projects Tree) + Editor Area */}
            <div className="flex flex-1 min-h-[350px] text-xs">
              {/* 1. Leftmost Activity Bar */}
              <div className="w-9 shrink-0 border-r border-border bg-[var(--vscode-activity,#181818)] flex flex-col items-center justify-between py-2 text-muted-foreground select-none">
                <div className="flex flex-col items-center gap-3">
                  <button className="relative flex h-6 w-6 items-center justify-center rounded text-primary" title="Explorer">
                    <span className="absolute left-0 top-0.5 bottom-0.5 w-0.5 bg-primary rounded-r" />
                    <FolderKanban className="h-3.5 w-3.5" />
                  </button>
                  <button className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:text-foreground" title="2FA Security">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </button>
                  <button className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:text-foreground" title="Flows">
                    <Workflow className="h-3.5 w-3.5" />
                  </button>
                  <button className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:text-foreground" title="Dev Tools">
                    <WandSparkles className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <button className="flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:text-foreground" title="Settings">
                    <Settings2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* 2. Sidebar - Projects Explorer Tree */}
              <div className="hidden sm:flex w-40 shrink-0 flex-col border-r border-border bg-[var(--vscode-sidebar,#252526)] select-none">
                {/* Sidebar Section Header */}
                <div className="flex items-center justify-between px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/40 font-mono">
                  <span>PROJECTS</span>
                  <span className="text-[9px] px-1 bg-primary/20 text-primary rounded">3</span>
                </div>

                {/* Project Tree Items */}
                <div className="p-1 space-y-0.5 text-[11px] font-mono">
                  {/* projects-runner Project */}
                  <div
                    onClick={() => setHeroActiveProject("projects-runner")}
                    className={cn(
                      "rounded px-1.5 py-1 cursor-pointer transition-colors",
                      heroActiveProject === "projects-runner"
                        ? "bg-[var(--vscode-list-active,#094771)]/50 text-foreground"
                        : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground",
                    )}
                  >
                    <div className="flex items-center gap-1">
                      <ChevronDown className="h-3 w-3 text-muted-foreground" />
                      <FolderOpen className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                      <span className="font-semibold text-[11px] truncate">projects-runner</span>
                    </div>
                    {/* Sub commands */}
                    <div className="ml-3.5 mt-1 space-y-1 border-l border-border/60 pl-1.5 text-[10px]">
                      <div className={cn("flex items-center justify-between", heroDevRunning ? "text-emerald-400 font-medium" : "text-muted-foreground")}>
                        <span className="flex items-center gap-1">
                          <span className={cn("h-1.5 w-1.5 rounded-full", heroDevRunning ? "bg-emerald-400 animate-pulse" : "bg-muted-foreground/50")} />
                          dev
                        </span>
                        {heroDevRunning ? <span className="text-[9px] text-muted-foreground">:6810</span> : null}
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                        <TerminalSquare className="h-2.5 w-2.5" />
                        build
                      </div>
                      <div className="flex items-center justify-between text-muted-foreground hover:text-foreground">
                        <span className="flex items-center gap-1">
                          <KeyRound className="h-2.5 w-2.5 text-emerald-400" />
                          2FA
                        </span>
                        <span className="font-mono text-[9px] text-emerald-400/80">3 keys</span>
                      </div>
                    </div>
                  </div>

                  {/* api-server Project */}
                  <div
                    onClick={() => setHeroActiveProject("api-server")}
                    className={cn(
                      "flex items-center gap-1 px-1.5 py-1 rounded cursor-pointer transition-colors",
                      heroActiveProject === "api-server"
                        ? "bg-[var(--vscode-list-active,#094771)]/50 text-foreground"
                        : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground",
                    )}
                  >
                    <ChevronRight className="h-3 w-3" />
                    <Folder className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">api-server</span>
                  </div>

                  {/* docs-site Project */}
                  <div
                    onClick={() => setHeroActiveProject("docs-site")}
                    className={cn(
                      "flex items-center gap-1 px-1.5 py-1 rounded cursor-pointer transition-colors",
                      heroActiveProject === "docs-site"
                        ? "bg-[var(--vscode-list-active,#094771)]/50 text-foreground"
                        : "text-muted-foreground hover:bg-foreground/[0.04] hover:text-foreground",
                    )}
                  >
                    <ChevronRight className="h-3 w-3" />
                    <Folder className="h-3.5 w-3.5 text-sky-400 shrink-0" />
                    <span className="truncate">docs-site</span>
                  </div>
                </div>
              </div>

              {/* 3. Main Workspace Area: Editor Tab + Project Runtime Controls + Terminal */}
              <div className="flex-1 flex flex-col min-w-0 bg-[var(--vscode-editor,#1e1e1e)]">
                {/* Editor Tabs Bar */}
                <div className="flex items-center justify-between border-b border-border bg-[var(--vscode-tab-inactive,#2d2d30)]">
                  <div className="flex items-stretch overflow-x-auto">
                    <div className="flex items-center gap-2 border-r border-border border-t-2 border-t-primary bg-[var(--vscode-tab-active,#1e1e1e)] px-3 py-1 text-xs font-medium text-foreground">
                      <FolderKanban className="h-3.5 w-3.5 text-primary" />
                      <span>{heroActiveProject}</span>
                    </div>
                    <div className="flex items-center gap-2 border-r border-border border-t-2 border-t-transparent px-3 py-1 text-xs text-muted-foreground hover:text-foreground">
                      <FileCode className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="hidden md:inline">package.json</span>
                    </div>
                  </div>
                  <div className="hidden pr-2 font-mono text-[10px] text-muted-foreground md:inline">
                    node v20.18.0
                  </div>
                </div>

                {/* Project Header Banner */}
                <div className="p-2.5 border-b border-border/60 bg-[var(--vscode-editor,#1e1e1e)] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-primary to-sky-600 flex items-center justify-center font-mono text-[11px] font-bold text-white shadow-sm shrink-0">
                      PR
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-xs text-foreground">{heroActiveProject}-app</span>
                        <span className="rounded bg-primary/15 px-1 py-0.1 font-mono text-[9px] text-primary">v0.7.2</span>
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground flex items-center gap-2">
                        <span>~/DEV/{heroActiveProject}</span>
                        <span className="hidden sm:inline text-border">|</span>
                        <span className="hidden sm:flex items-center gap-0.5 text-emerald-400">
                          <GitBranch className="h-2.5 w-2.5" /> main
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setHeroDevRunning((prev) => !prev)}
                      className="inline-flex items-center gap-1 rounded bg-primary/15 border border-primary/40 px-2 py-0.5 font-mono text-[10px] text-primary hover:bg-primary/25 cursor-pointer"
                    >
                      <Play className="h-2.5 w-2.5 fill-current" />
                      {heroDevRunning ? "Restart All" : "Run All"}
                    </button>
                  </div>
                </div>

                {/* Command Runtime Grid */}
                <div className="p-2.5 space-y-2 flex-1">
                  {/* Command 1: dev */}
                  <div className={cn(
                    "flex items-center justify-between gap-2 rounded-md border p-2 transition-colors",
                    heroDevRunning ? "border-emerald-500/30 bg-[var(--vscode-sidebar,#252526)]" : "border-border bg-[var(--vscode-sidebar,#252526)]",
                  )}>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-semibold text-foreground">dev</span>
                        {heroDevRunning ? (
                          <span className="inline-flex items-center gap-1 rounded bg-emerald-500/15 px-1.5 py-0.2 font-mono text-[10px] text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            running :6810
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded bg-card border border-border px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground">
                            stopped
                          </span>
                        )}
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground truncate">npm run dev -- --host</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {heroDevRunning ? (
                        <>
                          <button
                            title="Restart"
                            onClick={() => setHeroDevRunning(true)}
                            className="h-6 w-6 inline-flex items-center justify-center rounded border border-border bg-card text-muted-foreground hover:text-foreground cursor-pointer"
                          >
                            <RotateCcw className="h-2.5 w-2.5" />
                          </button>
                          <button
                            title="Stop"
                            onClick={() => setHeroDevRunning(false)}
                            className="h-6 w-6 inline-flex items-center justify-center rounded bg-destructive/15 text-destructive border border-destructive/30 hover:bg-destructive/25 cursor-pointer"
                          >
                            <Square className="h-2.5 w-2.5 fill-current" />
                          </button>
                        </>
                      ) : (
                        <button
                          title="Run"
                          onClick={() => setHeroDevRunning(true)}
                          className="h-6 w-6 inline-flex items-center justify-center rounded bg-primary text-primary-foreground hover:bg-[#1692e8] cursor-pointer"
                        >
                          <Play className="h-2.5 w-2.5 fill-current" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Command 2: build */}
                  <div className="flex items-center justify-between gap-2 rounded-md border border-border bg-[var(--vscode-sidebar,#252526)] p-2">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-xs font-semibold text-foreground">build</span>
                        <span className="inline-flex items-center gap-1 rounded bg-card border border-border px-1.5 py-0.2 font-mono text-[10px] text-muted-foreground">
                          idle · 459ms
                        </span>
                      </div>
                      <div className="font-mono text-[10px] text-muted-foreground truncate">tsc -b && vite build</div>
                    </div>
                    <button
                      title="Run build"
                      className="h-6 w-6 inline-flex items-center justify-center rounded bg-primary text-primary-foreground hover:bg-[#1692e8] cursor-pointer"
                    >
                      <Play className="h-2.5 w-2.5 fill-current" />
                    </button>
                  </div>

                  {/* Mini Embedded Terminal Panel */}
                  <div className="rounded-md border border-border bg-[#0d0d0d] font-mono text-xs text-slate-300 shadow-inner overflow-hidden">
                    {/* Terminal Tabs Header */}
                    <div className="flex items-center justify-between border-b border-border/40 bg-[#161616] px-2.5 py-1 text-[10px] text-muted-foreground select-none">
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-semibold flex items-center gap-1 border-b border-primary text-primary pb-0.5">
                          <TerminalSquare className="h-3 w-3" /> TERMINAL: dev
                        </span>
                        <span className="hover:text-foreground cursor-pointer">OUTPUT</span>
                        <span className="hover:text-foreground cursor-pointer flex items-center gap-1">
                          PORTS <span className="rounded bg-primary/30 px-1 text-[8px] text-primary">1</span>
                        </span>
                      </div>
                      {heroDevRunning ? (
                        <span className="text-[9px] text-emerald-400">● :6810</span>
                      ) : (
                        <span className="text-[9px] text-muted-foreground">● offline</span>
                      )}
                    </div>

                    {/* Terminal Output Lines */}
                    <div className="p-2.5 space-y-1 text-[10.5px]">
                      {heroDevRunning ? (
                        <>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sky-400 font-bold">$</span>
                            <span className="text-slate-200">npm run dev</span>
                          </div>
                          <div className="text-emerald-400">  ✓ VITE v8.1.4  ready in 214 ms</div>
                          <div className="text-slate-300">
                            {"  "}➜  <span className="font-bold">Local:</span>   <span className="text-sky-300 underline underline-offset-2">http://localhost:6810/</span>
                          </div>
                          <div className="text-slate-500">  ➜  Network: use --host to expose</div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sky-400 font-bold">$</span>
                            <span className="text-slate-400"># Process terminated by user</span>
                          </div>
                          <div className="text-amber-400">  [Process dev exited with code 0]</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status bar bottom strip */}
            <div className="flex h-6 items-center justify-between border-t border-border bg-[var(--vscode-status,#007acc)] px-3 text-[10px] text-white font-mono select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <GitBranch className="h-3 w-3" />
                  <span>main*</span>
                </div>
                <span>{heroDevRunning ? "1 active process" : "0 active processes"}</span>
                <span className="hidden sm:inline text-white/50">|</span>
                <span className="hidden sm:flex items-center gap-1 text-emerald-300">
                  <ShieldCheck className="h-2.5 w-2.5" /> 2FA: Unlocked
                </span>
              </div>
              <div className="flex items-center gap-3">
                {heroDevRunning ? <span>Port: 6810</span> : null}
                <span>UTF-8</span>
                <span>TypeScript JSX</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION */}
        <section id="features" className="section-shell py-12 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedBadge
              icon={<Zap className="h-3 w-3 text-primary" />}
              className="mx-auto mb-3 rounded-md border border-border bg-card font-mono text-xs text-muted-foreground"
            >
              {t("features.badge")}
            </AnimatedBadge>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
              {t("features.title")}
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              {t("features.description")}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="vscode-card h-full p-4 transition-colors hover:border-primary/40">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                  <feature.icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-foreground">{feature.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{feature.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WORKFLOW SECTION */}
        <section id="workflow" className="section-shell py-8 lg:py-12">
          <div className="vscode-card overflow-hidden p-5 sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <AnimatedBadge
                  icon={<Layers3 className="h-3 w-3 text-primary" />}
                  className="mb-3 rounded-md border border-border bg-background font-mono text-xs text-muted-foreground"
                >
                  {t("workflow.badge")}
                </AnimatedBadge>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                  {t("workflow.title")}
                </h2>
                <p className="mt-2 max-w-xl text-xs text-muted-foreground sm:text-sm">
                  {t("workflow.description")}
                </p>
              </div>

              <div className="space-y-2.5">
                {workflowSteps.map((step, index) => (
                  <div key={step.title} className="rounded-md border border-border bg-background p-3.5 transition-colors hover:border-primary/30">
                    <div className="flex items-start gap-3">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-xs font-bold text-primary-foreground">
                        0{index + 1}
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PREVIEW SECTION */}
        <section id="preview" className="section-shell py-12 lg:py-16">
          <div className="mb-6 max-w-2xl">
            <AnimatedBadge
              icon={<MonitorSmartphone className="h-3 w-3 text-primary" />}
              className="mb-3 rounded-md border border-border bg-card font-mono text-xs text-muted-foreground"
            >
              {t("preview.badge")}
            </AnimatedBadge>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
              {t("preview.title")}
            </h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              {t("preview.description")}
            </p>
          </div>

          <Tabs defaultValue="overview" value={previewTab} onValueChange={setPreviewTab} variant="vscode" className="w-full">
            {/* VS Code Editor Frame */}
            <div className="vscode-editor-frame overflow-hidden rounded-lg border border-border bg-[var(--vscode-editor,#1e1e1e)] shadow-lg">
              {/* Editor Tab Bar */}
              <div className="flex items-center justify-between border-b border-border bg-[var(--vscode-tab-inactive,#2d2d30)]">
                <div className="flex-1 min-w-0 overflow-x-auto scrollbar-thin">
                  <TabsList className="border-b-0 bg-transparent flex flex-nowrap min-w-max">
                    <TabsTrigger value="overview">
                      <FileCode className="h-3.5 w-3.5 text-sky-400" />
                      <span>{t("preview.tabOverview")}</span>
                    </TabsTrigger>
                    <TabsTrigger value="twofa">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>{t("preview.tabTwofa")}</span>
                    </TabsTrigger>
                    <TabsTrigger value="devType">
                      <WandSparkles className="h-3.5 w-3.5 text-purple-400" />
                      <span>{t("preview.tabDevType")}</span>
                    </TabsTrigger>
                    <TabsTrigger value="storage">
                      <FolderKanban className="h-3.5 w-3.5 text-amber-400" />
                      <span>{t("preview.tabStorage")}</span>
                    </TabsTrigger>
                    <TabsTrigger value="clean">
                      <TerminalSquare className="h-3.5 w-3.5 text-rose-400" />
                      <span>{t("preview.tabCleanCache")}</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="hidden pr-3 pl-2 font-mono text-[11px] text-muted-foreground sm:block shrink-0">
                  preview://projects-runner-app
                </div>
              </div>

              {/* Editor Breadcrumbs */}
              <div className="flex h-6 items-center gap-1.5 border-b border-border/60 bg-[var(--vscode-editor,#1e1e1e)] px-3 font-mono text-[11px] text-muted-foreground overflow-x-auto scrollbar-thin">
                <span>projects-runner</span>
                <span>&gt;</span>
                <span>screenshots</span>
                <span>&gt;</span>
                <span className="text-foreground">
                  {previewTab === "overview"
                    ? "overview.jpg"
                    : previewTab === "twofa"
                    ? "manage-2fa.jpg"
                    : previewTab === "devType"
                    ? "set-project-dev-type.jpg"
                    : previewTab === "storage"
                    ? "storage.jpg"
                    : "clean-cache.jpg"}
                </span>
              </div>

              {/* Tab Contents */}
              <div className="p-2 sm:p-3">
                <TabsContent value="overview">
                  <div className="overflow-hidden rounded-md border border-border/80">
                    <img
                      src="/screenshot-new.jpg"
                      alt={t("preview.overviewAlt")}
                      className="w-full object-cover"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="twofa">
                  <div className="overflow-hidden rounded-md border border-border/80">
                    <img
                      src="/manage-2fa.jpg"
                      alt={t("preview.twofaAlt")}
                      className="w-full object-cover"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="devType">
                  <div className="overflow-hidden rounded-md border border-border/80">
                    <img
                      src="/set-project-dev-type.jpg"
                      alt={t("preview.devTypeAlt")}
                      className="w-full object-cover"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="storage">
                  <div className="overflow-hidden rounded-md border border-border/80">
                    <img
                      src="/thanh-dung-luong.jpg"
                      alt={t("preview.storageAlt")}
                      className="w-full object-cover"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="clean">
                  <div className="overflow-hidden rounded-md border border-border/80">
                    <img
                      src="/clean-temp.jpg"
                      alt={t("preview.cleanCacheAlt")}
                      className="w-full object-cover"
                    />
                  </div>
                </TabsContent>
              </div>

              {/* Editor status bar */}
              <div className="flex h-6 items-center justify-between border-t border-border bg-[var(--vscode-status,#007acc)] px-3 text-[10px] text-white font-mono select-none">
                <div className="flex items-center gap-3">
                  <span>PNG 1920x1080</span>
                  <span>100% Zoom</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-3 w-3" />
                  <span>Projects Runner Desktop</span>
                </div>
              </div>
            </div>
          </Tabs>
        </section>

        {/* CTA BANNER SECTION */}
        <section className="section-shell py-8">
          <div className="relative overflow-hidden rounded-lg border border-primary/40 bg-card p-6 sm:p-8 shadow-md">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">
                  {t("cta.title")}
                </h2>
                <p className="mt-2 max-w-xl text-xs text-muted-foreground sm:text-sm">
                  {t("cta.description")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 lg:justify-end">
                <a
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={RELEASE_LINK_CLASS}
                >
                  {t("cta.download")}
                </a>
                <Button variant="secondary" size="md" className="rounded-md" onClick={openRepository}>
                  <Github className="h-3.5 w-3.5" />
                  {t("cta.source")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Changelog />

        {/* FAQ SECTION */}
        <section id="faq" className="section-shell py-12 lg:py-16">
          <div className="mb-6 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-foreground">{t("faq.title")}</h2>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              {t("faq.description")}
            </p>
          </div>
          <div className="grid gap-2.5 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q} className="vscode-card h-full p-4 transition-colors hover:border-primary/30">
                <h3 className="text-xs font-semibold text-foreground">{item.q}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-[var(--vscode-activity,#181818)] pt-5">
        <div className="section-shell pb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/app-icon.png" alt="" className="h-5 w-5 rounded-[3px] border border-border object-cover" />
            <div>
              <div className="text-xs font-semibold text-foreground">Projects Runner</div>
              <div className="font-mono text-[11px] text-muted-foreground">
                {t("footer.domain")}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <a
              href={EMAIL_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-card px-2.5 py-1 text-xs transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {t("footer.email")}
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md border border-border bg-card px-2.5 py-1 text-xs transition-colors hover:border-primary/40 hover:text-foreground"
            >
              <Send className="h-3.5 w-3.5 shrink-0" />
              {t("footer.telegram")}
            </a>
          </div>
        </div>

        {/* Bottom VS Code Status Bar */}
        <div className="border-t border-border bg-[var(--vscode-status,#007acc)] py-1 text-white font-mono text-[11px] select-none">
          <div className="section-shell flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <GitBranch className="h-3 w-3" />
                <span>main*</span>
              </div>
              <span className="hidden sm:inline">Ln 1, Col 1</span>
              <span className="hidden sm:inline">Spaces: 2</span>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span>UTF-8</span>
              <span>Projects Runner</span>
            </div>
          </div>
        </div>
      </footer>

      {analyticsConsent === null ? <AnalyticsConsentDialog onDecision={handleAnalyticsDecision} /> : null}
    </div>
  );
}

export default App;
