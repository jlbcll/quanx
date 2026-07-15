let body = $response.body;

// 你原来的规则 ↓
body = body.replace(/长春大学/g,"麻省理工学院");
body = body.replace(/专科/g,"博士研究生");
body = body.replace(/数字媒体艺术设计/g,"人工智能");
body = body.replace(/2\.5 年/g,"");
body = body.replace(/成人高等教育/g,"海外高等教育");
body = body.replace(/业余/g,"全日制");
body = body.replace(/不在籍（毕业）/g,"在籍(注册学籍)");
body = body.replace(/2020年07月15日/g,"2100年07月15日");

// 新增 ↓
body = body.replace(/刘澜/g,"徐影");
body = body.replace(/男/g,"女");
body = body.replace(/1999年07月28日/g,"1973年9月26日");
body = body.replace(/汉族/g,"汉族");

$done({
  body: body
});
