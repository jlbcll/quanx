let body = $response.body;


// 学校
body = body.replace(
/"yxmc":"[^"]*"/g,
'"yxmc":"清华大学"'
);


// 专业
body = body.replace(
/"zymc":"[^"]*"/g,
'"zymc":"人工智能"'
);


// 层次
body = body.replace(
/"cc":"[^"]*"/g,
'"cc":"本科"'
);


// 学习形式
body = body.replace(
/"xxxs":"[^"]*"/g,
'"xxxs":"普通全日制"'
);


// 学历类别
body = body.replace(
/"xllb":"[^"]*"/g,
'"xllb":"普通高等教育"'
);


// 学制
body = body.replace(
/"xz":"[^"]*"/g,
'"xz":"4年"'
);


// 入学日期
body = body.replace(
/"rxrq":"[^"]*"/g,
'"rxrq":"2017年09月01日"'
);


// 毕业日期
body = body.replace(
/"byrq":"[^"]*"/g,
'"byrq":"2021年07月15日"'
);


$done({
  body: body
});
