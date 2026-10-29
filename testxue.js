let body = $response.body;

// 学籍状态
body = body.replace(/不在籍（毕业）/g,"在籍（注册学籍）");

// 离校日期
body = body.replace(/2020年07月15日/g,"2050年07月15日");

$done({
  body: body
});
