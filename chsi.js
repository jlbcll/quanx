let body = $response.body;

// 学校
body = body.replace(/长春大学/g, "清华大学");

// 层次
body = body.replace(/专科/g, "博士研究生");

// 专业
body = body.replace(/数字媒体艺术设计/g, "核科学与技术");

// 学制
body = body.replace(/2\.5 年/g, "");

// 学历类别
body = body.replace(/成人高等教育/g, "普通高等教育");

// 学习形式
body = body.replace(/业余/g, "全日制");

// 学籍状态
body = body.replace(/不在籍（毕业）/g, "在籍(注册学籍)");

// 离校日期
body = body.replace(/2020年07月15日/g, "2100年07月15日");


$done({
  body: body
});
