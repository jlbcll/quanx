let body = $response.body;

// 先处理普通字符串
body = body.replace(/"yxmc":"[^"]*"/g,
'"yxmc":"清华大学"');

body = body.replace(/"zymc":"[^"]*"/g,
'"zymc":"核科学与技术"');

body = body.replace(/"cc":"[^"]*"/g,
'"cc":"博士研究生"');

body = body.replace(/"xxxs":"[^"]*"/g,
'"xxxs":"全日制"');

body = body.replace(/"xz":"[^"]*"/g,
'"xz":""');

body = body.replace(/"xjzt":"[^"]*"/g,
'"xjzt":"在籍（注册学籍）"');

body = body.replace(/"byrq":"[^"]*"/g,
'"byrq":"2100年07月15日"');

body = body.replace(/"xllb":"[^"]*"/g,
'"xllb":"普通高等教育"');


$done({
 body
});
