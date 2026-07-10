import {
  Download,
  FolderKanban,
  Play,
  Settings2,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap,
  Github,
  ArrowRight,
  CheckCircle2,
  Layers3,
  MonitorSmartphone,
  Keyboard,
  ShieldCheck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/motion/button/base";
import { StatefulButton } from "@/components/motion/button/stateful";
import { MagneticButton } from "@/components/motion/button/magnetic";
import { AnimatedBadge } from "@/components/motion/animated-badge";
import {
  AnimatedToastStack,
  useAnimatedToastStack,
} from "@/components/motion/animated-toast-stack";
import { Marquee } from "@/components/motion/marquee";
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

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#workflow", label: "Workflow" },
  { href: "#preview", label: "Preview" },
  { href: "#faq", label: "FAQ" },
];

const stack = [
  "Tauri",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "beUI v2",
  "Motion",
  "Local-first",
  "Windows",
];

const features = [
  {
    icon: FolderKanban,
    title: "Project-first workspace",
    body: "Keep every repo, script, and command collection in one clean sidebar so context switching stays instant.",
  },
  {
    icon: TerminalSquare,
    title: "Command launcher",
    body: "Save install, build, test, and custom commands with sections, notes, and one-click run controls.",
  },
  {
    icon: Workflow,
    title: "Faster local loops",
    body: "Stop hunting through shells and README snippets. Launch the right workflow from a polished desktop UI.",
  },
  {
    icon: Settings2,
    title: "Personal runtime prefs",
    body: "Theme, accent, terminal font, log timestamps, and stream labels adapt to the way you work.",
  },
  {
    icon: ShieldCheck,
    title: "Local and private",
    body: "Projects and commands stay on your machine. No cloud account required to organize your day-to-day tooling.",
  },
  {
    icon: Keyboard,
    title: "Built for daily use",
    body: "Designed for developers who bounce between many projects and need a dependable command surface.",
  },
];

const workflowSteps = [
  {
    title: "Add a project",
    detail: "Point Projects Runner at a folder, name it, and keep related notes next to the workspace.",
  },
  {
    title: "Save your commands",
    detail: "Group install, start, build, lint, and deploy steps into reusable sections.",
  },
  {
    title: "Run without friction",
    detail: "Launch, stop, and inspect output from a focused desktop surface instead of a pile of terminals.",
  },
];

const faqs = [
  {
    q: "What is Projects Runner?",
    a: "A desktop app for saving and launching project commands. It turns repeated terminal work into a reusable workspace.",
  },
  {
    q: "Who is it for?",
    a: "Developers managing multiple repositories, scripts, or local services who want a faster command loop.",
  },
  {
    q: "Does it need the cloud?",
    a: "No. Projects Runner is local-first. Your projects, notes, and command library stay on your machine.",
  },
  {
    q: "What stack powers the UI?",
    a: "The product is built with Tauri, React, TypeScript, Tailwind CSS, and beUI v2 motion components.",
  },
];

const previewTabs = [
  {
    value: "projects",
    label: "Projects",
    title: "Organized project rail",
    body: "Browse every workspace, jump into the active one, and keep command collections close to the source folder.",
    chips: ["Sidebar", "Avatars", "Quick switch"],
  },
  {
    value: "commands",
    label: "Commands",
    title: "Sectioned command library",
    body: "Group install, run, test, and deploy steps. Launch the right command without retyping the same shell history.",
    chips: ["Sections", "One-click run", "Notes"],
  },
  {
    value: "runtime",
    label: "Runtime",
    title: "Terminal-aware feedback",
    body: "Watch process output, control run state, and keep visual feedback clear with motion-driven status cues.",
    chips: ["Logs", "Status", "Stop / restart"],
  },
];

function App() {
  const [downloadState, setDownloadState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { toasts, showToast, dismissToast } = useAnimatedToastStack({
    limit: 3,
    defaultDuration: 4200,
  });

  const metrics = useMemo(
    () => [
      { label: "Projects", value: 48, suffix: "+" },
      { label: "Commands", value: 320, suffix: "+" },
      { label: "Seconds saved", value: 12, suffix: "s / run" },
    ],
    [],
  );

  const handleDownload = async () => {
    if (downloadState === "loading") return;
    setDownloadState("loading");
    showToast({
      title: "Preparing download",
      description: "Looking for the latest Projects Runner build…",
      status: "loading",
    });

    await new Promise((resolve) => window.setTimeout(resolve, 1100));
    setDownloadState("success");
    showToast({
      title: "Download coming soon",
      description: "The public installer will land here next. Watch the GitHub repo for releases.",
      status: "info",
    });

    window.setTimeout(() => setDownloadState("idle"), 1800);
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
              <div className="text-[11px] text-muted-foreground">Local command launcher</div>
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
            <ThemeToggle
              variant="circle"
              start="top-right"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
            />
            <Button
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() =>
                window.open(
                  "https://github.com/ocampoje17/projects-runner-landing-page",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
            >
              <Github className="h-4 w-4" />
              GitHub
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
                className="border border-primary/20 bg-primary/10 text-primary"
                showIcon={false}
              >
                <Sparkles className="h-3.5 w-3.5" />
                beUI v2 powered desktop workflow
              </AnimatedBadge>
            </ScrollReveal>

            <div className="space-y-4">
              <TextReveal
                as="h1"
                text="Run every project command from one beautiful desktop surface."
                className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]"
                whileInView
                split="word"
              />
              <ScrollReveal delay={0.08}>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Projects Runner keeps your repos, scripts, and terminal workflows organized.
                  Save commands once, launch them instantly, and stop retyping the same local rituals every day.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.12} className="flex flex-wrap items-center gap-3">
              <StatefulButton state={downloadState} onClick={handleDownload} size="lg" ripple>
                <Download className="h-4 w-4" />
                Download for Windows
              </StatefulButton>
              <MagneticButton
                variant="secondary"
                size="lg"
                onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore features
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
                      Live workspace
                    </div>
                    <div className="mt-1 text-lg font-semibold">projects-runner-app</div>
                  </div>
                  <AnimatedBadge showIcon={false} className="border border-success/20 bg-success/10 text-success">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    Ready
                  </AnimatedBadge>
                </div>

                <div className="grid gap-3">
                  {[
                    { name: "Install deps", cmd: "npm install", tone: "idle" },
                    { name: "Dev server", cmd: "npm run dev", tone: "running" },
                    { name: "Typecheck", cmd: "npm run build", tone: "success" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-background/50 px-3 py-3"
                    >
                      <div>
                        <div className="text-sm font-medium">{row.name}</div>
                        <div className="font-mono text-xs text-muted-foreground">{row.cmd}</div>
                      </div>
                      <Tooltip content={row.tone === "running" ? "Stop process" : "Run command"}>
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
                    terminal · projects-runner-app
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="text-sky-400">$</span> npm run dev
                    </div>
                    <div className="text-emerald-400">VITE ready in 214 ms</div>
                    <div className="text-slate-400">Local: http://localhost:6810/</div>
                    <div className="text-sky-300">
                      <TextShimmer className="bg-[linear-gradient(110deg,#64748b_30%,#e2e8f0_50%,#64748b_70%)]">
                        watching for file changes…
                      </TextShimmer>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </section>

        <section className="pb-10">
          <div className="section-shell mb-4 flex items-center justify-between gap-3">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Built with a modern stack
            </div>
          </div>
          <Marquee speed={28} gap="1.25rem" className="py-2">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-sm"
              >
                {item}
              </div>
            ))}
          </Marquee>
        </section>

        <section id="features" className="section-shell py-16 lg:py-20">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <AnimatedBadge showIcon={false} className="mx-auto mb-4 border border-border bg-card text-muted-foreground">
              <Zap className="h-3.5 w-3.5 text-primary" />
              Product surface
            </AnimatedBadge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need for local command muscle memory
            </h2>
            <p className="mt-3 text-muted-foreground">
              Projects Runner is not another terminal emulator. It is a command workspace built around projects,
              sections, and the actions you actually run every day.
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
                <AnimatedBadge showIcon={false} className="mb-4 border border-border bg-background/50 text-muted-foreground">
                  <Layers3 className="h-3.5 w-3.5 text-primary" />
                  Workflow
                </AnimatedBadge>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  From folder to runnable command library in three steps
                </h2>
                <p className="mt-3 max-w-xl text-muted-foreground">
                  Capture the scripts you already use, then promote them into a reusable surface for every project you touch.
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
            <AnimatedBadge showIcon={false} className="mb-4 border border-border bg-card text-muted-foreground">
              <MonitorSmartphone className="h-3.5 w-3.5 text-primary" />
              Product preview
            </AnimatedBadge>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A calm desktop UI for noisy local work
            </h2>
            <p className="mt-3 text-muted-foreground">
              Motion-aware controls, clear status, and a project-first layout make command launching feel intentional instead of chaotic.
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
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-sm font-medium">{tab.label} view</div>
                      <AnimatedBadge showIcon={false} className="border border-primary/20 bg-primary/10 text-primary">
                        beUI motion
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
                                  ? `Workspace ${index + 1}`
                                  : tab.value === "commands"
                                    ? `Command ${index + 1}`
                                    : `Process ${index + 1}`}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {tab.value === "runtime" ? "streaming logs" : "ready to launch"}
                              </div>
                            </div>
                          </div>
                          <CheckCircle2 className="h-4 w-4 text-success" />
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
                    Ready to make local project commands feel intentional?
                  </h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">
                    Projects Runner is the landing surface for a desktop workflow built around speed, clarity, and reusable command libraries.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <StatefulButton state={downloadState} onClick={handleDownload} size="lg">
                    <Download className="h-4 w-4" />
                    Get the app
                  </StatefulButton>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() =>
                      window.open(
                        "https://github.com/ocampoje17/projects-runner-landing-page",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <Github className="h-4 w-4" />
                    View source
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="faq" className="section-shell py-16 lg:py-20">
          <ScrollReveal className="mb-8 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">FAQ</h2>
            <p className="mt-3 text-muted-foreground">
              Quick answers about the product direction and what this landing page represents.
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
                projects-runner.laychu.com
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>Built with beUI v2</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <a
              href="https://github.com/starc007/ui-components"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              starc007/ui-components
            </a>
            <span className="h-1 w-1 rounded-full bg-border" />
            <a
              href="https://github.com/ocampoje17/projects-runner-landing-page"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground"
            >
              GitHub
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


