const en = {
  meta: {
    languageLabel: "Language",
    languageName: "English",
  },
  nav: {
    features: "Features",
    workflow: "Workflow",
    preview: "Preview",
    faq: "FAQ",
  },
  header: {
    tagline: "Local command launcher",
    github: "GitHub",
  },
  hero: {
    badge: "Desktop command workspace",
    title: "Keep your project commands in one reliable place.",
    description:
      "Projects Runner helps you save project commands, organize them by workspace, and launch your daily local workflows faster.",
    download: "Open releases",
    downloadLoading: "Opening releases",
    downloadSuccess: "Releases opened",
    downloadError: "Open manually",
    explore: "See features",
  },
  metrics: {
    projects: "Projects",
    commands: "Commands",
    saved: "Saved per run",
  },
  workspaceCard: {
    eyebrow: "Sample workspace",
    title: "projects-runner-app",
    ready: "Ready",
    install: "Install deps",
    dev: "Dev server",
    typecheck: "Build check",
    runCommand: "Run command",
    stopProcess: "Stop process",
    terminal: "terminal",
    watching: "watching for file changes...",
  },
  features: {
    badge: "Why it helps",
    title: "A simpler way to manage repeated local work",
    description:
      "The app focuses on the commands you actually run, so your day stays organized without extra setup noise.",
    projectFirstTitle: "Project-based organization",
    projectFirstBody:
      "Keep repositories, notes, and command groups together so each workspace stays easy to return to.",
    commandLibraryTitle: "Reusable command library",
    commandLibraryBody:
      "Save build, run, test, or custom commands once, then launch them again without retyping shell history.",
    fasterLoopsTitle: "Faster local workflow",
    fasterLoopsBody:
      "Move from project switching to command execution with fewer clicks and less context loss.",
    personalPrefsTitle: "Comfortable daily setup",
    personalPrefsBody:
      "Adjust theme, accent, terminal font, timestamps, and other details to match how you work.",
    privacyTitle: "Local and private",
    privacyBody:
      "Your projects and command definitions stay on your machine. No cloud account is required.",
    dailyUseTitle: "Made for repeated use",
    dailyUseBody:
      "Built for developers who work across multiple projects and want a dependable command surface every day.",
  },
  workflow: {
    badge: "Workflow",
    title: "From folder to ready-to-run commands in three steps",
    description:
      "Capture the commands you already use and turn them into a cleaner, reusable workflow.",
    step1Title: "Add a project",
    step1Body:
      "Point Projects Runner to a folder, name the workspace, and keep related notes nearby.",
    step2Title: "Save your commands",
    step2Body:
      "Group install, run, build, lint, or other commands into sections you can reuse later.",
    step3Title: "Launch with less friction",
    step3Body:
      "Run, stop, and inspect output from one focused desktop surface instead of juggling terminal windows.",
  },
  preview: {
    badge: "Preview",
    title: "Calm UI for noisy local work",
    description:
      "See projects, commands, and runtime feedback in a layout that stays readable while you work.",
    projectsTab: "Projects",
    commandsTab: "Commands",
    runtimeTab: "Runtime",
    projectsTitle: "Project list that stays organized",
    projectsBody:
      "Browse workspaces, jump back into the right repo, and keep command collections close to each project.",
    projectsChip1: "Workspace list",
    projectsChip2: "Quick access",
    projectsChip3: "Notes",
    commandsTitle: "Commands grouped by purpose",
    commandsBody:
      "Keep install, run, test, and deploy steps in one place so the next action is always easy to find.",
    commandsChip1: "Sections",
    commandsChip2: "One-click run",
    commandsChip3: "Descriptions",
    runtimeTitle: "Clear runtime feedback",
    runtimeBody:
      "Watch logs, track command state, and stop or restart processes without losing context.",
    runtimeChip1: "Logs",
    runtimeChip2: "Status",
    runtimeChip3: "Restart",
    itemReady: "Ready to launch",
    itemStreaming: "Streaming logs",
    workspaceLabel: "Workspace",
    commandLabel: "Command",
    processLabel: "Process",
  },
  cta: {
    title: "Ready to open your command library from one place?",
    description:
      "Browse the latest releases and try Projects Runner on the platform that fits your setup.",
    download: "Open releases",
    source: "View repository",
  },
  faq: {
    title: "FAQ",
    description: "Quick answers for visitors who want to understand the app before trying it.",
    whatIsQ: "What is Projects Runner?",
    whatIsA:
      "It is a desktop app for saving and launching project commands from a reusable workspace.",
    whoIsItForQ: "Who is it for?",
    whoIsItForA:
      "It is for developers who work across multiple repositories, scripts, or local services and want a faster command loop.",
    cloudQ: "Does it need the cloud?",
    cloudA:
      "No. The app is local-first, so your projects, notes, and commands stay on your machine.",
    platformsQ: "Is it limited to Windows?",
    platformsA:
      "No. The releases page is the right place to check the currently available builds for different platforms.",
  },
  footer: {
    domain: "projects-runner.laychu.com",
    languageToggle: "Switch language",
    repository: "Repository",
    releases: "Releases",
  },
  toasts: {
    openingTitle: "Opening releases",
    openingDescription: "Redirecting you to the latest Projects Runner release page.",
    successTitle: "Releases opened",
    successDescription: "If nothing appeared, use the repository links below to open the releases page directly.",
    errorTitle: "Popup blocked",
    errorDescription: "The releases page could not be opened automatically, so the current tab will navigate there instead.",
  },
} as const;

export default en;
