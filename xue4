let body = $response.body;

// 在线验证码显示为空
body = body.replace(
  /(<div class="col-left">在线验证码<\/div><div class="col-right">)[^<]*(<\/div>)/g,
  '$1$2'
);

$done({ body });
