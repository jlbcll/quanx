let body = $response.body;

// 层次
body = body.replace(/专科/g,"本科");

// 学制
body = body.replace(/2\.5 年/g,"10年");

// 学历类别
body = body.replace(/成人高等教育/g,"普通高等教育");

// 学习形式
body = body.replace(/业余/g,"普通全日制");

// 学籍状态
body = body.replace(/不在籍（毕业）/g,"在籍（注册学籍）");

// 离校日期
body = body.replace(/2020年07月15日/g,"2050年07月15日");

$done({
  body: body
});
