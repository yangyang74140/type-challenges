type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type r = TupleToObject<typeof tuple>;

function fn(arr) {
  let obj = {};
  arr.forEach((key) => {
    obj[key] = key;
  });
  return obj;
}

// js实现
// 对比学习法

// 1.返回一个对象
// 2.遍历数组
