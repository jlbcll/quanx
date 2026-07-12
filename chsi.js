/*
 学信档案 detail.action 修改脚本
*/

let body = $response.body;

// 学校
body = body.replace(
  /"yxmc":"[^"]*"/,
  '"yxmc":"清华大学"'
);

// 专业
body = body.replace(
  /"zymc":"[^"]*"/,
  '"zymc":"核科学与技术"'
);

// 层次
body = body.replace(
  /"cc":"[^"]*"/,
  '"cc":"博士研究生"'
);

// 学习形式
body = body.replace(
  /"xxxs":"[^"]*"/,
  '"xxxs":"全日制"'
);

// 学制（空白）
body = body.replace(
  /"xz":"[^"]*"/,
  '"xz":""'
);

// 学历类别
body = body.replace(
  /"xllb":"[^"]*"/,
  '"xllb":"普通高等教育"'
);

// 学籍状态
body = body.replace(
  /"xjzt":"[^"]*"/,
  '"xjzt":"在籍(注册学籍)"'
);

// 入学日期（保持不变，如需修改可添加）
// body = body.replace(/"rxrq":"[^"]*"/,'"rxrq":"2018年09月01日"');

// 离校日期
body = body.replace(
  /"byrq":"[^"]*"/,
  '"byrq":"2100年07月15日"'
);

// 民族
// body = body.replace(/"mz":"[^"]*"/,'"mz":"汉族"');

// 姓名
// body = body.replace(/"xm":"[^"]*"/,'"xm":"测试姓名"');


$done({
  body: body
});
