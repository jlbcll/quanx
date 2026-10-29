let body = $response.body;

// 学籍状态
body = body.replace(/不在籍（毕业）/g,"不在籍（毕业）");

$done({
  body: body
});
