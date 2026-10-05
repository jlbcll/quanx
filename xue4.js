let body = $response.body;

body = body.replace(
  '在线验证码',
  '在线验证码【测试成功】'
);

$done({
  body: body
});
