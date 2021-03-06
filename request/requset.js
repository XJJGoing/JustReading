//这里放入小程序的各种请求
const server = 'https://www.justyunmeng.com';

//请求获取登录的接口
const login = `${server}/login`;

//请求会话的api
const session = `${server}/session`;

//存入用户的信息的接口(用户的学院、专业、学号)
const userInfo = `${server}/userinfo`;

//定义退出用户的接口以用来改变用户的状态
const logout = `${server}/logout`;

//反馈页面url
const feedback = `${server}/feedback`;

//轮播图url以及文字的介绍
const item1 = `${server}/day_books`;

//manger登录认证界面
const managerLogin = `${server}/managerLogin`;

//打卡请求的接口
const clock = `${server}/clock`;

//获取选择做题的api
const chooseInfo = `${server}/chooseInfo`;

//开始做题的api
const partice = `${server}/partice`;

//计算做题的时间
const learnTime = `${server}/learnTime`;

//录入试题的接口
const insert = `${server}/insert`;

//教务处学生登录接口：
const insert_student = `${server}/insert_student` ;

//考试成绩的查询的接口
const exam = `${server}/exam`;

//查询课表的接口
const course = `${server}/course`;

//排行榜的接口
const lines = `${server}/lines`;

module.exports = {
  server:server,
  login:login,
  session:session,
  userInfo:userInfo,
  logout:logout,
  feedback:feedback,
  item1:item1,
  managerLogin:managerLogin,
  clock:clock,
  chooseInfo:chooseInfo,
  partice:partice,
  learnTime:learnTime,
  insert:insert,
  insert_student: insert_student,
  exam:exam,
  course:course,
  lines:lines
}
