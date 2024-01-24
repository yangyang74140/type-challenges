type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js 实现

function myPick(todo, keys) {
  let obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });

  return obj;
}

console.log(myPick({ title: "string", completed: "boolean" }, "title"));

/**
 * js实现思路
 * 返回一个对象
 * 第一个参数:对象,第二个参数:选择对象中那个几个属性为新对象的属性,属性值:分别对应第一个参数对象属性的值
 * 遍历第二个参数
 * 判断第一个参数里是否有这个属性
 *
 */
