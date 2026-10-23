const vi = {
  meta: {
    languageLabel: "Ngôn ngữ",
    languageName: "Tiếng Việt",
  },
  nav: {
    features: "Tính năng",
    workflow: "Quy trình",
    preview: "Xem trước",
    faq: "Câu hỏi",
  },
  header: {
    tagline: "Trình chạy lệnh cục bộ",
    github: "GitHub",
  },
  hero: {
    badge: "Không gian lệnh & bảo mật 2FA trên desktop",
    title: "Giữ toàn bộ lệnh dự án của bạn trong một nơi đáng tin cậy.",
    description:
      "Projects Runner giúp bạn lưu lệnh theo từng dự án, sắp xếp gọn theo workspace và chạy nhanh hơn các quy trình local hằng ngày.",
    download: "Mở trang phát hành",
    explore: "Xem tính năng",
  },
  metrics: {
    projects: "Dự án",
    commands: "Lệnh",
    saved: "Tiết kiệm mỗi lần chạy",
  },
  workspaceCard: {
    eyebrow: "Workspace mẫu",
    title: "projects-runner-app",
    ready: "Sẵn sàng",
    install: "Cài phụ thuộc",
    dev: "Chạy dev",
    typecheck: "Kiểm tra build",
    runCommand: "Chạy lệnh",
    stopProcess: "Dừng tiến trình",
    terminal: "terminal",
    watching: "đang theo dõi thay đổi tệp...",
  },
  features: {
    badge: "Lợi ích",
    title: "Cách gọn hơn để quản lý công việc local lặp lại",
    description:
      "Ứng dụng tập trung vào đúng các lệnh bạn dùng hằng ngày để quy trình làm việc gọn hơn mà không thêm phần rườm rà.",
    projectFirstTitle: "Tổ chức theo dự án",
    projectFirstBody:
      "Giữ repository, ghi chú và nhóm lệnh đi cùng nhau để mỗi workspace luôn dễ quay lại.",
    commandLibraryTitle: "Thư viện lệnh tái sử dụng",
    commandLibraryBody:
      "Lưu lệnh build, run, test hoặc lệnh tùy chỉnh một lần rồi chạy lại mà không cần lục shell history.",
    twofaVaultTitle: "Két xác thực 2FA tích hợp",
    twofaVaultBody:
      "Quản lý và tạo mã 2FA TOTP trực tiếp cho từng dự án. Mã hoá Argon2id và XChaCha20-Poly1305, mở khoá nhanh bằng PIN 6 số, tự động khoá khi rời máy và tự xoá clipboard.",
    fasterLoopsTitle: "Vòng lặp local nhanh hơn",
    fasterLoopsBody:
      "Chuyển từ đổi dự án sang chạy lệnh với ít thao tác hơn và ít mất ngữ cảnh hơn.",
    personalPrefsTitle: "Thiết lập dùng hằng ngày",
    personalPrefsBody:
      "Chỉnh theme, accent, font terminal, timestamp và các chi tiết khác cho hợp cách làm việc của bạn.",
    privacyTitle: "Cục bộ và riêng tư tuyệt đối",
    privacyBody:
      "Dự án, khoá bí mật 2FA và danh sách lệnh đều lưu trữ mã hoá trên máy của bạn. Không tài khoản cloud, không thu thập dữ liệu nhạy cảm.",
  },
  workflow: {
    badge: "Quy trình",
    title: "Từ thư mục đến danh sách lệnh sẵn sàng chạy trong ba bước",
    description:
      "Lấy các lệnh bạn đang dùng và biến chúng thành quy trình gọn gàng, dễ tái sử dụng hơn.",
    step1Title: "Thêm dự án",
    step1Body:
      "Trỏ Projects Runner tới thư mục cần dùng, đặt tên workspace và lưu ghi chú liên quan ngay bên cạnh.",
    step2Title: "Lưu lệnh",
    step2Body:
      "Nhóm các lệnh cài đặt, chạy, build, lint hoặc lệnh khác vào từng section để dùng lại về sau.",
    step3Title: "Chạy ít vướng hơn",
    step3Body:
      "Khởi chạy, dừng và xem output từ một giao diện desktop tập trung thay vì xoay giữa nhiều cửa sổ terminal.",
  },
  preview: {
    badge: "Xem trước",
    title: "Một cửa sổ gọn gàng cho dự án, lệnh và runtime",
    description:
      "Ảnh chụp giao diện thực tế của Projects Runner với quản lý workspace, lệnh, két mã 2FA, cấu hình công nghệ, dung lượng và dọn dẹp cache.",
    tabOverview: "Tổng quan & Workspace",
    tabTwofa: "Két bảo mật mã 2FA",
    tabDevType: "Cấu hình Dev Type & Stack",
    tabStorage: "Thống kê dung lượng & Files",
    tabCleanCache: "Dọn dẹp Dev Cache & Dependencies",
    overviewAlt: "Ảnh chụp giao diện tổng quan workspace và lệnh của Projects Runner",
    twofaAlt: "Ảnh chụp két xác thực 2FA tích hợp quản lý mã TOTP theo từng dự án",
    devTypeAlt: "Ảnh chụp cài đặt cấu hình loại dự án và công nghệ phát triển",
    storageAlt: "Ảnh chụp tính năng thống kê dung lượng và chi tiết file",
    cleanCacheAlt: "Ảnh chụp popup dọn dẹp dev cache và dependencies",
    projectsTab: "Dự án",
    commandsTab: "Lệnh",
    runtimeTab: "Runtime",
    projectsTitle: "Danh sách dự án luôn gọn gàng",
    projectsBody:
      "Duyệt workspace, quay lại đúng repo và giữ các nhóm lệnh luôn đi kèm từng dự án.",
    projectsChip1: "Danh sách workspace",
    projectsChip2: "Truy cập nhanh",
    projectsChip3: "Ghi chú",
    commandsTitle: "Lệnh được nhóm theo mục đích",
    commandsBody:
      "Giữ lệnh cài đặt, chạy, test và deploy trong một chỗ để thao tác tiếp theo luôn dễ tìm.",
    commandsChip1: "Section",
    commandsChip2: "Chạy một chạm",
    commandsChip3: "Mô tả",
    runtimeTitle: "Phản hồi runtime rõ ràng",
    runtimeBody:
      "Theo dõi log, biết trạng thái lệnh và dừng hoặc chạy lại tiến trình mà không mất ngữ cảnh.",
    runtimeChip1: "Log",
    runtimeChip2: "Trạng thái",
    runtimeChip3: "Chạy lại",
    itemReady: "Sẵn sàng chạy",
    itemStreaming: "Đang stream log",
    workspaceLabel: "Workspace",
    commandLabel: "Lệnh",
    processLabel: "Tiến trình",
  },
  cta: {
    title: "Sẵn sàng mở thư viện lệnh của bạn từ một nơi duy nhất?",
    description:
      "Truy cập các bản phát hành mới nhất và thử Projects Runner trên nền tảng phù hợp với máy của bạn.",
    download: "Mở trang phát hành",
    source: "Xem repository",
  },
  changelog: {
    title: "Lịch sử cập nhật",
    description: "5 bản cập nhật gần nhất của Projects Runner.",
    latest: "Mới nhất",
    viewAll: "Xem tất cả bản phát hành",
    releaseLink: "Xem bản phát hành {{version}}",
    releases: {
      v073: {
        title: "Sửa lỗi interactive terminal không tương tác được",
        details: ["Khắc phục lỗi không thể tương tác với interactive terminal."],
      },
      v072: {
        title: "Cập nhật bổ sung 2FA",
        details: [
          "Loại bỏ chức năng Flows hiện có nhằm tinh gọn hệ thống.",
          "Bổ sung chức năng thêm và quản lý mã xác thực TOTP (2FA), hỗ trợ lấy mã xác thực trực tiếp trên máy tính, thuận tiện cho quá trình kiểm thử ứng dụng (test app) và thao tác hằng ngày.",
          "Đại tu và tối ưu hóa Terminal, cải thiện hiệu suất, độ ổn định và khả năng tương tác, bảo đảm hoạt động mượt mà, ổn định và hiệu quả hơn.",
        ],
      },
      v052: {
        title: "Cải thiện trải nghiệm giao diện",
        details: [
          "Rút gọn phần giữa của văn bản dài để dễ đọc hơn.",
          "Giữ nguyên tab đang chọn và bổ sung hỗ trợ biểu tượng công nghệ phát triển.",
        ],
      },
      v051: {
        title: "Sửa lỗi hiển thị và bảng chi tiết",
        details: [
          "Sửa lỗi hiển thị trạng thái tải ở thư mục gốc.",
          "Sửa giao diện bảng chi tiết và cửa sổ chọn biểu tượng.",
        ],
      },
      v050: {
        title: "Cải tiến Terminal và công cụ dọn dẹp",
        details: [
          "Sửa thứ tự mở tab Terminal và lỗi bảng duyệt tệp.",
          "Bổ sung loại dự án phục vụ dọn dẹp và thanh hiển thị dung lượng thư mục.",
          "Cải thiện tính năng dọn bộ nhớ đệm ứng dụng và giao diện cửa sổ dọn dẹp.",
        ],
      },
    },
  },
  faq: {
    title: "Câu hỏi thường gặp",
    description: "Một vài câu trả lời nhanh để hiểu ứng dụng trước khi dùng thử.",
    whatIsQ: "Projects Runner là gì?",
    whatIsA:
      "Đây là ứng dụng desktop để lưu và chạy lệnh dự án từ một workspace có thể tái sử dụng.",
    twofaQ: "Trình xác thực 2FA tích hợp hoạt động như thế nào?",
    twofaA:
      "Projects Runner tích hợp két mã TOTP 2FA mã hoá (Argon2id + XChaCha20-Poly1305) ngay trong workspace. Bạn có thể gắn mã 2FA vào từng dự án cụ thể, mở khoá nhanh bằng PIN 6 số và sao chép mã với cơ chế tự động xoá clipboard.",
    whoIsItForQ: "Ứng dụng này dành cho ai?",
    whoIsItForA:
      "Dành cho developer làm việc với nhiều repository, script hoặc dịch vụ local và muốn vòng lặp chạy lệnh nhanh hơn.",
    cloudQ: "Có cần cloud không?",
    cloudA:
      "Không. Ứng dụng ưu tiên local-first nên dự án, ghi chú và lệnh của bạn nằm trên máy.",
    backupQ: "Tôi có thể sao lưu và xuất dữ liệu 2FA không?",
    backupA:
      "Có. Bạn có thể xuất file sao lưu mã hoá định dạng .pr2fa được bảo vệ bằng mật khẩu chính, quét mã QR trực tiếp từ màn hình hoặc file ảnh và khôi phục tài khoản bất kỳ lúc nào.",
    platformsQ: "Hỗ trợ những nền tảng nào?",
    platformsA:
      "Hỗ trợ Windows, macOS, Linux.",
  },
  footer: {
    domain: "Một sản phẩm của namhnz 💗 2026",
    languageToggle: "Chuyển ngôn ngữ",
    email: "namqhong@gmail.com",
    telegram: "@namhnz",
  },
  analyticsConsent: {
    title: "Cho phép dùng Analytics?",
    description:
      "Chúng tôi dùng Google Analytics để hiểu cách trang được sử dụng và cải thiện trải nghiệm. Analytics chỉ được bật khi bạn đồng ý.",
    accept: "Bật Analytics",
    decline: "Không, cảm ơn",
  },
} as const;

export default vi;
