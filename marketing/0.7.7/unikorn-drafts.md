# Projects Runner 0.7.7

Historical copy from the initial publication. See `revised-copy.md` for the current 2FA/MCP copy and publication status.

## Changelog

Kết nối trợ lý AI với những quyền do bạn chọn

Projects Runner 0.7.7 có thêm kết nối với trợ lý AI qua MCP. Bạn có thể cho trợ lý làm việc với ghi chú, chạy các lệnh đã lưu và theo dõi kết quả ngay trong dự án.

Bạn tự chọn dự án và những việc trợ lý được phép làm. Quyền xem, sửa, chạy lệnh và đọc kết quả được chọn riêng; khi không còn cần, bạn có thể thu hồi quyền hoặc tắt kết nối.

Bản này cũng cải thiện việc theo dõi lệnh đang chạy, quản lý mã xác thực theo dự án và sửa lỗi lưu ghi chú khi xoá hết nội dung nhưng vẫn giữ tiêu đề. Phần xem trước ghi chú đã được chỉnh lại cho dễ đọc.

Lỗi đóng gói bản macOS đã được khắc phục. Bạn có thể tải bản 0.7.7 cho Windows, macOS và Linux tại https://projects-runner.laychu.com/.

Projects Runner vẫn miễn phí và có mã nguồn mở.

## Product Talk

Mọi người đang cất lệnh chạy dự án ở đâu?

Cùng là mở một dự án lên làm tiếp, nhưng đôi khi việc đầu tiên lại là tìm xem lần trước mình chạy nó bằng lệnh gì. Lệnh thì ở lịch sử terminal, ghi chú ở chỗ khác, còn mỗi dự án lại có một cách khởi động riêng.

Mình làm Projects Runner để gom những thứ đó lại: mỗi dự án có danh sách lệnh và ghi chú đi cùng, cần thì bấm Run, xem kết quả hoặc dừng ngay trong app.

Ở bản 0.7.7, mình thêm kết nối trợ lý AI để trợ lý có thể dùng những lệnh và ghi chú đã lưu. Người dùng chọn dự án và cấp từng quyền cụ thể, nên có thể bắt đầu từ những việc nhỏ như đọc ghi chú hoặc theo dõi kết quả.

App miễn phí, mã nguồn mở và có bản cho Windows, macOS, Linux. Mọi người có thể xem thử ở https://projects-runner.laychu.com/.

Mọi người thường lưu những lệnh này trong README, ghi chú riêng hay cứ tìm lại trong terminal? Có thao tác lặp lại nào khiến mọi người muốn có một nút bấm riêng không?

## Behind the Build

Thêm AI vào Projects Runner, mình bắt đầu từ quyền người dùng

Mình mang Projects Runner đến Tools for Builders với một việc khá quen thuộc: giúp người làm nhiều dự án quay lại đúng chỗ và chạy tiếp công việc nhanh hơn.

Ý tưởng ban đầu là giữ lệnh và ghi chú ngay cạnh từng dự án. Việc lưu một lần rồi bấm Run lại nghe nhỏ, nhưng khi mỗi dự án có cách chạy, kiểm thử và đóng gói khác nhau, một danh sách rõ ràng giúp bớt phải tìm lại từ đầu.

Khi thêm kết nối trợ lý AI cho bản 0.7.7, điều mình phải nghĩ kỹ hơn là trợ lý nên được làm đến đâu. Có lúc mình chỉ muốn nó đọc ghi chú; có lúc cần chạy một lệnh đã lưu. Những nhu cầu đó cần được chọn riêng.

Vì vậy, kết nối mặc định tắt. Mỗi trợ lý có danh sách dự án và các quyền riêng. Quyền sửa lệnh không tự cho phép đọc lại nội dung lệnh; quyền chạy cũng không tự cho phép xem kết quả. Nếu quyền bị thu hồi khi một lần chạy lại đang chờ, lượt chạy mới sẽ bị chặn.

Đây là phần mình muốn chia sẻ ở Behind the Build: một thao tác tiện hơn thường kéo theo những quyết định về quyền kiểm soát. Mình muốn người dùng nhìn được trợ lý đang được phép làm gì, và có thể đổi ý khi cần.

Projects Runner miễn phí, mã nguồn mở, dành cho Windows, macOS và Linux. Nếu đang tham gia contest hoặc thường làm việc với nhiều dự án, mình rất muốn nghe cách mọi người tổ chức lệnh và phân quyền cho trợ lý AI.

## Contest introduction

Projects Runner là ứng dụng desktop dành cho người làm nhiều dự án và thường phải tìm lại lệnh chạy, ghi chú hoặc kết quả từ lần làm trước.

Mình xây sản phẩm để mỗi dự án có một chỗ rõ ràng cho các lệnh và ghi chú đi cùng. Lưu lệnh một lần, sau đó bấm Run, xem kết quả, dừng hoặc chạy lại khi cần. App còn có kho mã xác thực theo dự án, đồng bộ dữ liệu qua thư mục riêng và công cụ dọn dữ liệu phát triển.

Bản 0.7.7 bổ sung kết nối trợ lý AI. Người dùng tự chọn dự án và cấp riêng quyền xem, sửa, chạy lệnh hoặc đọc kết quả; có thể thu hồi quyền khi không còn cần.

Mình tham gia Tools for Builders với mong muốn giúp những việc lặp lại mỗi ngày bớt ngắt mạch làm việc. Projects Runner miễn phí, mã nguồn mở và có bản cho Windows, macOS, Linux.

Dùng thử: https://projects-runner.laychu.com/
