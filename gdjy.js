let body = $response.body;


// 学校
body = body.replace(/长春大学/g,"清华大学");


// 专业
body = body.replace(/数字媒体艺术设计/g,"核科学与技术");


// 层次
body = body.replace(/专科/g,"博士研究生");


// 学习形式
body = body.replace(/业余/g,"普通全日制");


// 学历类别
body = body.replace(/成人高等教育/g,"普通高等教育");


$done({
    body: body
});
