let body = $response.body;

// 学历类别
body = body.replace(/成人高等教育/g,"普通高等教育");

// 学籍状态
body = body.replace(/不在籍（毕业）/g,"在籍（注册学籍）");

// 离校日期
body = body.replace(/2026年09月15日/g,"2030年06月15日");

$done({
  body: body
});
