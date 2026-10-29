let body = $response.body;

// 学籍状态
body = body.replace(/不在籍（毕业）/g,"在籍（注册学籍）");

$done({
  body: body
});
