let obj = JSON.parse($response.body);


// 学籍信息
if (obj.data.xj && obj.data.xj.dataList) {
    obj.data.xj.dataList.forEach(item => {

        // 学校
        item.yxmc = "清华大学";

        // 专业
        item.zymc = "核科学与技术";

        // 层次
        item.cc = "博士研究生";

        // 学习形式
        item.xxxs = "普通全日制";

    });
}


// 学历信息
if (obj.data.xl && obj.data.xl.dataList) {
    obj.data.xl.dataList.forEach(item => {

        // 学校
        item.yxmc = "清华大学";

        // 专业
        item.zymc = "核科学与技术";

        // 层次
        item.cc = "博士研究生";

        // 学习形式
        item.xxxs = "普通全日制";

    });
}


$done({
    body: JSON.stringify(obj)
});
