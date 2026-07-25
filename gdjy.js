let body = $response.body;


// 学籍信息 + 学历信息
body = body.replace(/长春大学/g,"清华大学");

body = body.replace(/数字媒体艺术设计/g,"核科学与技术");

body = body.replace(/专科/g,"博士研究生");

body = body.replace(/业余/g,"普通全日制");


$done({
  body: body
});
