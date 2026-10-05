let body = $response.body;

body = body.replace(
  '教育部学籍在线验证报告',
  '【QX已生效】'
);

$done({
  body: body
});
