# Nội dung sửa: 2FA và MCP

Changelog, hai Talk và giới thiệu contest bên dưới đã được lưu công khai trên Unikorn ngày 30/10/2026. Changelog và hai Talk dùng ảnh mới làm nổi bật 2FA/MCP với dữ liệu hư cấu. Bài Threads được chuẩn bị để đăng thủ công.

## Changelog

2FA theo dự án, trợ lý AI qua MCP

Projects Runner 0.7.7 giúp bạn làm việc với lệnh, ghi chú, mã xác thực 2FA và trợ lý AI trong cùng workspace.

2FA ngay cạnh dự án
Gắn tài khoản xác thực vào từng dự án, giữ trong kho mã hoá và sao chép mã ngay khi cần. Bản này tiếp tục cải thiện việc quản lý tài khoản 2FA theo dự án.

Kết nối trợ lý AI qua MCP
Cho trợ lý đọc ghi chú, chạy lệnh đã lưu và theo dõi kết quả. Bạn chọn riêng từng dự án và từng quyền, rồi có thể thu hồi khi cần.

Nếu muốn trợ lý lấy mã 2FA, bạn cần cấp quyền và chọn rõ tài khoản được phép dùng. Kho phải được mở trong app; trợ lý không thể tự mở kho hoặc đọc khoá bí mật.

Ngoài ra, bản này sửa lỗi lưu ghi chú khi xoá hết nội dung nhưng vẫn giữ tiêu đề, chỉnh độ rộng phần xem trước, cải thiện theo dõi lệnh đang chạy và khắc phục bộ cài macOS.

Miễn phí, mã nguồn mở, có trên Windows, macOS và Linux.
Dùng thử: https://projects-runner.laychu.com/

## Product Talk

Lệnh chạy, mã 2FA, trợ lý AI: bạn đang sắp xếp chúng thế nào?

Khi làm nhiều dự án, mình hay phải tìm lại lệnh chạy, mở ghi chú cũ, rồi chuyển sang chỗ khác để lấy mã 2FA. Những thao tác nhỏ này cứ lặp lại mỗi ngày.

Mình làm Projects Runner để gom chúng theo từng dự án: lưu lệnh rồi bấm Run, giữ ghi chú bên cạnh và gắn các tài khoản 2FA liên quan. Mã xác thực được giữ trong kho mã hoá, cần thì mở kho và sao chép ngay trong app.

Ở bản 0.7.7, mình thêm kết nối trợ lý AI qua MCP. Trợ lý có thể đọc ghi chú, chạy lệnh đã lưu và theo dõi kết quả trong những dự án được cấp quyền.

Hai phần này cũng có thể làm việc cùng nhau: nếu cần trợ lý lấy mã 2FA, bạn chọn rõ tài khoản và cấp quyền riêng. Kho phải được mở trong app; quyền truy cập dự án không tự cho phép lấy mã của các tài khoản đi kèm.

App miễn phí, mã nguồn mở, có trên Windows, macOS và Linux: https://projects-runner.laychu.com/.

Mọi người đang để lệnh chạy và mã 2FA ở đâu? Nếu kết nối trợ lý AI vào công việc hằng ngày, mọi người muốn tự giữ lại bước nào?

## Behind the Build

Đưa 2FA và MCP vào cùng workspace: mình giữ quyền kiểm soát ra sao?

Mình mang Projects Runner đến Tools for Builders để giải quyết những lần bị ngắt mạch khi chuyển dự án: tìm lại lệnh chạy, ghi chú và mã xác thực liên quan.

2FA theo dự án giúp mình biết tài khoản nào dùng cho công việc nào. Các tài khoản nằm trong kho mã hoá, có thể gắn với nhiều dự án, mở kho và sao chép mã khi cần.

Khi thêm kết nối trợ lý AI qua MCP cho bản 0.7.7, câu hỏi tiếp theo là: phần nào nên giao cho trợ lý? Đọc ghi chú, chạy lệnh và lấy mã 2FA là những nhu cầu khác nhau, nên cần được chọn riêng.

Vì vậy, kết nối mặc định tắt. Mỗi trợ lý có các dự án và quyền riêng. Quyền truy cập một dự án không tự mở quyền lấy mã 2FA; người dùng phải chọn tài khoản và cấp quyền tương ứng. Kho vẫn cần được mở trực tiếp trong app, trợ lý không thể tự mở kho hoặc đọc khoá bí mật.

Quyền sửa lệnh cũng không tự cho phép đọc lại nội dung lệnh. Nếu quyền chạy bị thu hồi trong lúc một lần chạy lại đang chờ, lượt chạy mới sẽ bị chặn.

Đó là điều mình muốn chia sẻ ở Behind the Build: gom công việc vào một nơi tiện hơn cũng cần giúp người dùng nhìn rõ ai đang được phép làm gì, và đổi ý khi cần.

Projects Runner miễn phí, mã nguồn mở, có trên Windows, macOS và Linux: https://projects-runner.laychu.com/.

Nếu dùng trợ lý AI cho công việc phát triển, mọi người muốn kiểm soát bước nào thật rõ?

## Contest introduction

Projects Runner gom lệnh chạy, ghi chú và mã xác thực 2FA theo từng dự án, giúp bạn quay lại công việc mà bớt phải tìm kiếm ở nhiều nơi.

Với 2FA, bạn gắn tài khoản vào các dự án liên quan, giữ trong kho mã hoá và sao chép mã ngay trong app khi cần.

Bản 0.7.7 bổ sung kết nối trợ lý AI qua MCP. Trợ lý có thể đọc ghi chú, chạy lệnh đã lưu và theo dõi kết quả trong những dự án bạn cho phép. Bạn chọn riêng từng quyền và có thể thu hồi khi cần.

Nếu muốn trợ lý lấy mã 2FA, bạn cấp quyền và chọn rõ tài khoản được dùng. Kho phải được mở trong app; quyền truy cập dự án không tự cho phép lấy mã 2FA.

Mình tham gia Tools for Builders với mong muốn giúp người làm nhiều dự án bớt ngắt mạch bởi những thao tác lặp lại. Projects Runner miễn phí, mã nguồn mở và có bản cho Windows, macOS, Linux.

Dùng thử: https://projects-runner.laychu.com/

## Threads

Projects Runner 0.7.7: 2FA theo dự án, AI qua MCP 🔐

Giữ mã 2FA trong kho mã hoá, gắn với từng dự án.

Cho trợ lý AI đọc ghi chú, chạy lệnh đã lưu qua MCP. Nếu cần lấy mã 2FA, bạn chọn tài khoản và cấp quyền riêng; kho phải đang mở.

Bạn chọn từng quyền và có thể thu hồi khi cần.

Bản này còn sửa lưu ghi chú và bộ cài macOS.

Miễn phí, mã nguồn mở. Windows, macOS, Linux.

https://projects-runner.laychu.com
