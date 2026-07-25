let body = $response.body;

// 学校

body = body.replace(

/"yxmc":"[^"]*"/g,

'"yxmc":"清华大学"'

);

// 专业

body = body.replace(

/"zymc":"[^"]*"/g,

'"zymc":"核科学与技术"'

);

// 层次

body = body.replace(

/"cc":"[^"]*"/g,

'"cc":"博士研究生"'

);

// 学习形式

body = body.replace(

/"xxxs":"[^"]*"/g,

'"xxxs":"全日制"'

);

// 学历类别

body = body.replace(

/"xllb":"[^"]*"/g,

'"xllb":"普通高等教育"'

);

// 学制

body = body.replace(

/"xz":"[^"]*"/g,

'"xz":""'

);

// 入学日期

body = body.replace(

/"rxrq":"[^"]*"/g,

'"rxrq":"2018年09月01日"'

);

// 毕业日期

body = body.replace(

/"byrq":"[^"]*"/g,

'"byrq":"2100年07月15日"'
);


body = body.replace(
/"bjyjl":"[^"]*"/g,
'"bjyjl":"在籍（注册学籍）"'
);



$done({
  body: body
});
