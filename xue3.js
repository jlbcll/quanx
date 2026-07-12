let body = $response.body;

// ===== 基本信息 =====

// 姓名
body = body.replace(
  /"xm":"[^"]*"/,
  '"xm":"徐影"'
);

// 身份证号
body = body.replace(
  /"sfzh":"[^"]*"/,
  '"sfzh":"22230119730926212X"'
);

// 性别
body = body.replace(
  /"xb":"[^"]*"/,
  '"xb":"女"'
);

// 出生日期
body = body.replace(
  /"csrq":"[^"]*"/,
  '"csrq":"1973年09月26日"'
);

// 民族
body = body.replace(
  /"mz":"[^"]*"/,
  '"mz":"汉族"'
);


// ===== 学籍信息 =====

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

// 学制
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

// 离校日期
body = body.replace(
  /"byrq":"[^"]*"/,
  '"byrq":"2100年07月15日"'
);



$done({
  body: body
});
