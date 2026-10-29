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
    badge: "Desktop command & 2FA workspace",
    title: "Keep your project commands in one reliable place.",
    description:
      "Keep commands and notes with each project, run them when needed, and connect an AI assistant with permissions you choose.",
    download: "Open releases",
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
    twofaVaultTitle: "Built-in 2FA authenticator vault",
    twofaVaultBody:
      "Keep project-linked verification codes in an encrypted vault. Unlock with a PIN, copy a code when needed, and lock automatically when you step away.",
    fasterLoopsTitle: "Connect your AI assistant",
    fasterLoopsBody:
      "Let an AI assistant read notes, run saved commands, or follow output through MCP. Choose its projects and permissions, and revoke access when needed.",
    personalPrefsTitle: "Comfortable daily setup",
    personalPrefsBody:
      "Adjust theme, accent, terminal font, timestamps, and other details to match how you work.",
    privacyTitle: "Stored on your device",
    privacyBody:
      "Projects, notes, and commands are stored on your device; the authenticator vault is encrypted. AI connections only work when you enable them and grant access.",
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
    title: "One clean window for projects, commands, and runtime",
    description:
      "Explore project commands, verification codes, and data sync. The overview uses an illustrative demo with all displayed data replaced.",
    tabOverview: "Overview & Workspaces",
    tabTwofa: "2FA Authenticator Vault",
    tabDevType: "Dev Type & Stack",
    tabStorage: "Storage & File Breakdown",
    tabCleanCache: "Clean Dev Cache & Dependencies",
    tabOfflineSync: "Offline Data Sync",
    overviewAlt: "Projects Runner 0.7.7 demo showing Build preview in the fictional moss-studio project; all displayed data has been replaced",
    twofaAlt: "Projects Runner built-in 2FA authenticator vault and accounts management",
    devTypeAlt: "Projects Runner developer type and project tech stack configuration",
    storageAlt: "Projects Runner storage analyzer and details panel",
    cleanCacheAlt: "Projects Runner clean dev cache and dependencies dialog",
    offlineSyncAlt: "Projects Runner settings for choosing an offline sync folder and data groups on external storage",
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
  changelog: {
    title: "Update history",
    description: "The 5 latest updates to Projects Runner.",
    latest: "Latest",
    viewAll: "View all releases",
    releaseLink: "View release {{version}}",
    releases: {
      v077: {
        title: "Connect an AI assistant, with a macOS installer fix",
        details: [
          "Connect an AI assistant through MCP to work with local projects, commands, and notes within the permissions you grant.",
          "Control viewing, editing, running commands, and reading output separately; revoke access when it is no longer needed.",
          "Improved tracking of running commands and project-linked authenticator accounts.",
          "Fixed saving notes after clearing the body while keeping the title, and adjusted the preview width.",
          "Fixed macOS installer packaging and added checks for bundled components.",
        ],
      },
      v074: {
        title: "Added offline data sync",
        details: [
          "Choose an offline sync folder on an external storage device to synchronize data between multiple computers through one shared sync folder.",
        ],
      },
      v073: {
        title: "Fix unresponsive interactive terminal",
        details: ["Fixed an issue that prevented interaction with the interactive terminal."],
      },
      v072: {
        title: "Added 2FA support",
        details: [
          "Removed the existing Flows feature to simplify the app.",
          "Added TOTP (2FA) account management and authentication codes directly on your desktop for app testing and everyday use.",
          "Overhauled and optimized the Terminal for better performance, stability, and interaction.",
        ],
      },
      v052: {
        title: "Improved the interface experience",
        details: [
          "Truncate long text in the middle for easier reading.",
          "Preserve the selected tab and support development technology icons.",
        ],
      },
      v051: {
        title: "Display and detail panel fixes",
        details: [
          "Fixed the loading state at the root directory.",
          "Fixed the detail panel interface and icon picker popup.",
        ],
      },
      v050: {
        title: "Terminal and cleanup improvements",
        details: [
          "Fixed Terminal tab opening order and file explorer panel issues.",
          "Added project types for cleanup and a folder size bar.",
          "Improved app cache cleanup and the cleanup popup interface.",
        ],
      },
    },
  },
  faq: {
    title: "FAQ",
    description: "Quick answers for visitors who want to understand the app before trying it.",
    whatIsQ: "What is Projects Runner?",
    whatIsA:
      "It is a desktop app for saving and launching project commands from a reusable workspace.",
    twofaQ: "How does the built-in 2FA Authenticator work?",
    twofaA:
      "Link authenticator accounts to projects and keep them in an encrypted vault. Use a 6-digit PIN for quick unlock, lock automatically when you step away, and clear copied codes from the clipboard automatically.",
    whoIsItForQ: "Who is it for?",
    whoIsItForA:
      "It is for developers who work across multiple repositories, scripts, or local services and want a faster command loop.",
    cloudQ: "Does it need the cloud?",
    cloudA:
      "No. The app is local-first, so your projects, notes, and commands stay on your machine.",
    backupQ: "Can I backup and export my 2FA accounts?",
    backupA:
      "Yes. You can export encrypted .pr2fa backups protected by your master password, scan QR codes directly from screen or images, and restore your accounts at any time.",
    platformsQ: "Which platforms are supported?",
    platformsA:
      "Supports Windows, macOS, and Linux.",
  },
  footer: {
    domain: "Một sản phẩm của namhnz 💗 2026",
    languageToggle: "Switch language",
    email: "namqhong@gmail.com",
    telegram: "@namhnz",
  },
  analyticsConsent: {
    title: "Allow Analytics?",
    description:
      "We use Google Analytics to understand how the site is used and improve the experience. Analytics is enabled only when you agree.",
    accept: "Allow Analytics",
    decline: "No, thanks",
  },
} as const;

export default en;
