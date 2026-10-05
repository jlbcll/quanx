let body = $response.body;

body = body.replace(
  /在线验证码/g,
  '在线验证码【QX测试】'
);

$done({
  body: body
});
