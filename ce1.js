let body = $response.body;

body = body.replace(/长春大学/g,"测试学校123");

$done({
  body: body
});
