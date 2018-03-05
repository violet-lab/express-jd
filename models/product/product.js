



'use strict';

// const Sequelize = require('sequelize');
// const sequelize = require('../../config/mysql');

// const User = sequelize.define('aaa', {
//   firstName: {
//     type: Sequelize.STRING
//   },
//   lastName: {
//     type: Sequelize.STRING
//   }
// }, {
//   timestamps: false // 时间戳此时为 false
// });

// // // force: true 如果表已经存在，将会丢弃表
// // User.sync({force: true}).then(() => {
// //   // 表已创建
// //   return User.create({
// //     firstName: 'John',
// //     lastName: 'Hancock'
// //   });
// // });


// // User.findAll().then(users => {
// //   console.log(users);
// // })
// // User.findOne().then(user => {
// //   console.log(user.get('firstName'));
// // });
// // async function find(){
// //   var uu = await User.findOne();
// //   console.log(uu);
// //   console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
  
// //   var aaa = await User.findAll();
// //   console.log(aaa);
// // }
// (function(){
//   find();
// })()

Array.matrix = function(numrows, numcols, initial) {
  let arr = [];
  for (let i = 0; i < numrows; ++i) {
    let columns = [];
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
}

let Stack = (function(){
  function Stack() {
    this.dataStore = [];
    this.top = 0;
  }
  Stack.prototype.push = function(element) {
    this.dataStore[this.top++] = element;
  }
  Stack.prototype.peek = function() {
    return this.dataStore[this.top-1];
  }
  Stack.prototype.pop = function() {
    return this.dataStore[--this.top];
  }
  Stack.prototype.clear = function() {
    this.top = 0;
  }
  Stack.prototype.length = function() {
    return this.top;
  }
  return Stack;
})();

let Queue = (function () {
  function Queue() {
    this.dataStore = [];
  }
  Queue.prototype.enqueue = function(element) {
    this.dataStore.push(element);
  }
  Queue.prototype.dequeue = function() {
    return this.dataStore.shift();
  }
  Queue.prototype.front = function() {
    return this.dataStore[0];
  }
  Queue.prototype.back = function() {
    return this.dataStore[this.dataStore.length-1];
  }
  Queue.prototype.toString = function() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i] + "\n";
    }
    return retStr;
  }
  Queue.prototype.empty = function() {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  return Queue;
})()

let PriQueue = (function() {
  function Ele(value, code) {
    this.value = value;
    this.code = code;
  }
  function PriQueue() {
    this.dataStore = [];
  }
  PriQueue.prototype.enqueue = function(element) {
    this.dataStore.push(element);
  }
  PriQueue.prototype.dequeue = function() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
      if (this.dataStore[i].code < priority) {
        priority = i;
      }
    }
    return this.dataStore.splice(priority,1);
  }
  PriQueue.prototype.front = function() {
    return this.dataStore[0];
  }
  PriQueue.prototype.back = function() {
    return this.dataStore[this.dataStore.length-1];
  }
  PriQueue.prototype.toString = function() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
      retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return retStr;
  }
  PriQueue.prototype.empty = function() {
    if (this.dataStore.length == 0) {
      return true;
    } else {
      return false;
    }
  }
  return PriQueue;
})()

let LList = (function() {
  function Node(element) {
    this.element = element;
    this.next = null;
  }

  function LList() {
    this.head = new Node("head");
    this.foot = new Node("foot");
    this.head.next = this.foot;
  }
  LList.prototype.remove = function(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
  LList.prototype.findPrevious = function(item) {
    var currNode = this.head;
    while ((currNode.next !== null) && (currNode.next.element != item)) {
      currNode = currNode.next;
      if (currNode.next === null) {
        currNode =null;
        break;
      }
    }
    return currNode;
  }
  LList.prototype.display = function() {
    var currNode = this.head;
    console.log(currNode.element);
    while (!(currNode.next == null)) {
      currNode = currNode.next;
      console.log(currNode.element);
    }
  }
  LList.prototype.find = function(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
      if (currNode === null) {
        break;
      }
    }
    return currNode;
  }
  LList.prototype.insert = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }
  return LList;
})()

let DLList = (function () {
  function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
  }
  function DLList() {
    this.head = new Node("head");
    this.foot = new Node("foot");
    this.head.next = this.foot;
    this.foot.previous = this.head;
  }
  DLList.prototype.find = function(item) {
    var currNode = this.head;
    while (currNode.element != item) {
      currNode = currNode.next;
      if (currNode === null) {
        break;
      }
    }
    return currNode;
  }
  DLList.prototype.insert = function(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next.previous = newNode;
    current.next = newNode;
  }
  DLList.prototype.remove = function(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
  }
  DLList.prototype.display = function() {
    var currNode = this.head;
    console.log(currNode.element);
    while (currNode.next !== null) {
      currNode = currNode.next;
      console.log(currNode.element);
    }
  }
  return DLList;
})()

let BST = (function () {
  let Node = (function () {
    function Node(data, left, right) {
      this.data = data;
      this.left = left;
      this.right = right;
    }
    Node.prototype.show = function () {
      return this.data;
    }
    return Node;
  })()

  function BST() {
    this.root = null;
  }
  BST.prototype.insert = function(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
      this.root = n;
    }
    else {
      var current = this.root;
      var parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = n;
            break;
          }
        }
        else {
          current = current.right;
          if (current == null) {
            parent.right = n;
            break;
          }
        }
      }
    }
  }
  BST.prototype.inOrder = function(node) {
    if (!(node === null)) {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  }
  BST.prototype.preOrder = function(node) {
    if (!(node === null)) {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  BST.prototype.postOrder = function(node) {
    if (!(node === null)) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  }
  BST.prototype.getMin = function() {
    var current = this.root;
    while (!(current.left == null)) {
      current = current.left;
    }
    return current.data;
  }
  BST.prototype.getMax = function() {
    var current = this.root;
    while (!(current.right == null)) {
      current = current.right;
    }
    return current.data;
  }
  BST.prototype.find = function(data) {
    var current = this.root;
    while (current != null) {
      if (current.data == data) {
        return current;
      }
      else if (data < current.data) {
        current = current.left;
      }
      else {
        current = current.right;
      }
    }
    return null;
  }
  BST.prototype.remove = function(data) {
    root = this.removeNode(this.root, data);
  }
  BST.prototype.removeNode = function(node, data) {
    if (node == null) {
      return null;
    }
    if (data == node.data) {
      // 没有子节点的节点
      if (node.left == null && node.right == null) {
        return null;
      }
      // 没有左子节点的节点
      if (node.left == null) {
        return node.right;
      }
      // 没有右子节点的节点
      if (node.right == null) {
        return node.left;
      }
      // 有两个子节点的节点
      var tempNode = this.getSmallest(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
    else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }
  BST.prototype.getSmallest = function(node) {
    if (node.left == null) {
      return node;
    } else {
      return this.getSmallest(node.left);
    }
 }

  return BST;
})()

let Graph = (function() {
  function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      //  this.adj[i].push("");
    }
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
      this.marked[i] = false;
    }
    this.edgeTo = [];
  }
  Graph.prototype.addEdge = function (v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }
  Graph.prototype.showGraph = function() {
    for (var i = 0; i < this.vertices; ++i) {
      let st = i + " -> " ;
      for (var j = 0; j < this.vertices; ++j ) {
        if (this.adj[i][j] != undefined) {
          st += this.adj[i][j] + ' ';
        }
      }
      console.log(st);
    }
  }
  Graph.prototype.dfs = function(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) { 
      console.log("Visited vertex: " + v);
    }
    for (const w of this.adj[v]) {
      if (!this.marked[w]) {
        this.dfs(w);
      }
    }
  }
  Graph.prototype.bfs = function(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // 添加到队尾
    while (queue.length > 0) {
      var v = queue.shift(); // 从队首移除
      if (v !== undefined) {
        console.log("Visisted vertex: " + v);
      }
      for (var w of this.adj[v]) {
        if (!this.marked[w]) {
          this.edgeTo[w] = v;
          this.marked[w] = true;
          queue.push(w);
        }
      }
    }
    console.log(this.edgeTo);
  }
  Graph.prototype.hasPathTo = function(s, v) {
    this.bfs(s)
    return this.marked[v];
  }
  Graph.prototype.pathTo = function(s, v) {
    var source = s;
    if (!this.hasPathTo(s, v)) {
      return undefined;
    }
    var path = [];
    for (var i = v; i != source; i = this.edgeTo[i]) {
      path.unshift(i);
    }
    path.unshift(source);
    return path;
  }

  Graph.prototype.topSort = function() {
    var stack = [];
    var visited = [];
    for (var i = 0; i < this.vertices; i++) {
      visited[i] = false;
    }
    for (var i = 0; i < this.vertices; i++) {
      if (visited[i] == false) {
        this.topSortHelper(i, visited, stack);
      }
    }
    for (var i = 0; i < stack.length; i++) {
      if (stack[i] != undefined && stack[i] != false) {
        console.log(this.vertexList[stack[i]]);
      } 
    }
  }

  Graph.prototype.topSortHelper = function(v, visited, stack) {
    visited[v] = true; 
    for (var w in this.adj[v]) {
      if (!visited[w]) {
        this.topSortHelper(visited[w], visited, stack);
      }
    }
    stack.push(v);
  }



  return Graph;
})()


// let g = new Graph(7);
// g.addEdge(0,1);
// g.addEdge(1,3);
// g.addEdge(5,3);
// g.addEdge(0,2);
// g.addEdge(4,6);
// g.addEdge(2,4);
// g.showGraph();


// console.log('aaaaaaaaaaaaaaaaaaaaaaaa');


// var paths = g.pathTo(3, 6);
// console.log(paths);

let CArray = (function(params) {
  function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
  
    for (var i = 0; i < numElements; ++i) {
       this.dataStore[i] = i;
    }
  }
  
  function setData() {
    for (var i = 0; i < this.numElements; ++i) {
       this.dataStore[i] = Math.floor(Math.random() * 
                           (this.numElements+1));
    }
  }
  
  function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
       this.dataStore[i] = 0;
    }
  }
  
  function insert(element) {
    this.dataStore[this.pos++] = element;
  }
  
  function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
       retstr += this.dataStore[i] + " ";
       if (i > 0 && i % 10 == 0) {
          retstr += "\n";
       }
    }
    return retstr;
  }
  
  function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  return CArray;  
  
})()

var numElements = 10;
var myNums = new CArray(numElements);
myNums.setData();

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i ; j++) {
      if (array[j] > array[j+1]) {
        [array[j+1], array[j]] = [array[j], array[j+1]];
      }
      
    }
    
  }
  return array;
}
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = i+1; j < array.length; j++) {
      if (array[i] > array[j]) {
        // es6
        [array[j], array[i]] = [array[i], array[j]];
      } 
    }     
  }
  return array;
}
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = 0;
    for (j = i - 1; (j >= 0) && (temp < array[j]); j--) {
      array[j + 1] = array[j];  
    }
    array[j + 1] = temp;
  }
  return array;
}

function shellsort(array, gaps) {
  for (var g = 0; g < gaps.length; g++) {
    for (var i = gaps[g]; i < array.length; i++) {
      var temp = array[i];
      for (var j = i; (j >= gaps[g]) && (temp < array[j-gaps[g]]);j -= gaps[g]) {
        array[j] = array[j - gaps[g]];
      }
      array[j] = temp;
    }
    console.log(array);
  }
}

function dynOrdShellsort(array) {
  var N = array.length;
  var h = 1;
  while (h < N/3) {
    h = 3 * h + 1;
  }
  while (h >= 1) {
    for (var i = h; i < N; i++) {
      for (var j = i; j >= h && array[j] < array[j-h]; j -= h) {
        // swap(array, j, j-h);
        [array[j], array[j-h]] = [array[j-h], array[j]];
      }
    }
    console.log(array);
    h = (h-1)/3;
  }
}

let mergeSort = (function () {
  function mergeSort(arr) {
    if (arr.length < 2) {
      return;
    }
    var step = 1;
    var left, right;
    while (step < arr.length) {
      left = 0;
      right = step;
      while (right + step <= arr.length) {
        mergeArrays(arr, left, left+step, right, right+step);
        left = right + step;
        right = left + step;
      }
      if (right < arr.length) {
        mergeArrays(arr, left, left+step, right, arr.length);
      }
      step *= 2;
    }
  }
  function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    var rightArr = new Array(stopRight - startRight + 1);
    var leftArr = new Array(stopLeft - startLeft + 1);
    k = startRight;
    for (var i = 0; i < (rightArr.length-1); ++i) {
      rightArr[i] = arr[k];
      ++k;
    }
    k = startLeft;
    for (var i = 0; i < (leftArr.length-1); ++i) {
      leftArr[i] = arr[k];
      ++k;
    }
    rightArr[rightArr.length-1] = Infinity; // 哨兵值
    leftArr[leftArr.length-1] = Infinity; // 哨兵值
    var m = 0;
    var n = 0;
    for (var k = startLeft; k < stopRight; ++k) {
      if (leftArr[m] <= rightArr[n]) {
        arr[k] = leftArr[m];
        m++;
      }
      else {
        arr[k] = rightArr[n];
        n++;
      }
    }
    // console.log("left array - ", leftArr);
    // console.log("right array - ", rightArr);
  }
  return mergeSort;
})()

function qSort(arr){
  if (arr.length == 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return qSort(left).concat(pivot, qSort(right));
}

// var start = new Date().getTime();
// bubbleSort(myNums.dataStore).toString()
// console.log(bubbleSort(myNums.dataStore).toString())
// var stop = new Date().getTime();
// var between = stop - start;
// console.log('冒泡排序执行时间:' + between + " 毫秒。");

// start = new Date().getTime();
// selectionSort(myNums.dataStore).toString()
// console.log(selectionSort(myNums.dataStore).toString())
// stop = new Date().getTime();
// between = stop - start;
// console.log('选择排序执行时间:' + between + " 毫秒。");


// start = new Date().getTime();
// insertionSort(myNums.dataStore).toString()
// console.log(insertionSort(myNums.dataStore).toString())
// stop = new Date().getTime();
// between = stop - start;
// console.log('插入排序执行时间:' + between + " 毫秒。");
// console.log(new Date().getTime());


// let  arr= [6,0,2,9,3,5,8,0,5,4];
// let  arr2= [6,0,2,9,3,5,8,0,5,4];
// shellsort(arr, [5,3,1]);
// console.log('aaaaaaaaaaaaaaaaaaaaaaa');
// dynOrdShellsort(arr2);

// var nums = [6,10,1,9,4,8,2,7,3,5];
// console.log(nums);
// mergeSort(nums);
// console.log(nums);


// var a = [];
// for (var i = 0; i < 10; ++i) {
// a[i] = Math.floor((Math.random()*100)+1);
// }
// console.log(a);
// console.log(qSort(a));




  
// class Person {
//   constructor(x, y) {
//     this.name = x;
//     this.age = y;
//   }

//   toString() {
//     return '(' + this.name + ', ' + this.age + ')';
//   }
// }

// var person1 = new Person('xiaohua',12);
// console.log(person1.toString());

let Animal = (function () {
  function Animal (name) {
    this.name = name || 'Animal';
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
  }
  // Animal.prototype.eat = function(food) {
  //   console.log(this.name + '正在吃：' + food);
  // }
  return Animal;
})()

let Cat1 = (function () {
  function Cat(){ 
  }
  Cat.prototype = new Animal();
  Cat.prototype.name = 'cat';
  return Cat;
})()

let Cat2 = (function () {
  function Cat(name){
    Animal.call(this,name);
  }
  return Cat;
})()

let Cat3 = (function () {
  function Cat(name){
    Animal.call(this, name);
  }
  Cat.prototype = new Animal();
  return Cat;
})()

let Cat = (function () {
  function Cat(name){
    Animal.call(this, name);
  }
  (function(sub, sup){
    var Super = function(){};
    Super.prototype = sup.prototype;
    sub.prototype = new Super();
    sub.prototype.constructor = sub
  })(Cat, Animal)
  return Cat;
})()
// var cat = new Cat('df');
// console.log(cat.name);
// cat.sleep();
// console.log(cat instanceof Animal); // true
// console.log(cat instanceof Cat); // true


// var arrdf = [3, 5, 7, 4, 6, 8]
// var er    = ['df', 'ji']
// console.log(arrdf.indexOf(34));



// console.log(arrdf.concat(er));
// console.log(arrdf);
// console.log(er);
// console.log(arrdf.splice(3, 2,',o','op'));
// console.log(arrdf);
// console.log('----------------------------------------');

// arrdf = [3, 5, 7, 4, 6, 8];
//  er    = ['df', 'ji'];
//  let mm = arrdf.slice(1,4);
// console.log(mm);
// console.log(arrdf);
// var checkage = age => age > 18;
// console.log(checkage(3));






// // var f = hw.next()
// // console.log(f);

// function name(params) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve(params)
//     }, 3000);
//   });
// }
// async function myf () {
//   let gf = await name('xiaohua');
//   let gf2 = await name('xiaohong');
//   return gf + gf2 
// }
// async function myf3 (params) {
//   let aaa = await myf();
//   return aaa;
// }
// myf3().then(function (params) {
//   console.log(params);
  
// });
// let df = {a: 33}
// let f = {a: 33}


// function box() {
//   var user = [2];
//   return function () { //通过匿名函数返回 box()局部变量
//       return user;
//   };
// }
// console.log(box()());

// var b = box()();
// b.push('fd');
// console.log(b);

// console.log(box()()); 

// var map = (f, arr) => arr.map(f);
// var arre = '';
// map = function (f, arr) {
//   return arr.map(f);
// }
// var aa = map(function (value) {
//   arre += value;
// }, [3, 5, 6]);

// let Person = (function () {
//   function Person(name) {
//     this.name = name; 
//   }
//   Person.getInstance = function(name) {
//     console.log(this === Person);
//     if(!this.instance) {
//       this.instance = new Person(name);
//     }
//     return this.instance;
//   }
//   return Person;
// })()


// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//   static getInstance(name) {
//     console.log(this === Dog);
//     if(!this.instance) {
//       this.instance = new Dog(name);
//     }
//     return this.instance;
//   }
// }



// class Foo {
//   static classMethod() {
//     console.log(this === Foo);
//     return 'hello';
//   }
// }
// Foo.age = 'dfd';
// console.log(Foo.classMethod() );
// console.log(Foo.age);

// function Foo() {
// }
// Foo.classMethod = function() {
//   console.log(this === Foo);
//   return 'hello';
// }
// Foo.age = 'dfd';
// console.log(Foo.classMethod() );
// console.log(Foo.age);


// let Person = (function () {
//   function Person(name) {
//     this.name = name; 
//   }
//   Person.getInstance = function(name) {
//     if(!this.instance) {
//       this.instance = new Person(name);
//     }
//     return this.instance;
//   }
//   return Person;
// })()

// let a = Person.getInstance('df');
// let b = Person.getInstance('dfdf');
// console.log(a);
// console.log(b);
// console.log(a ===b);

// 辅助类

var Interface =(function(){
  // 接口类
  var Interface = function(name,methods){
    if(arguments.length != 2){
      throw new Error("参数数量不对，期望传入两个参数，但是只传入了"+arguments.length+"个参数");
    }
    this.name = name;
    this.methods = [];
    for(var i = 0, len = methods.length; i < len; i++){
      if(typeof methods[i] !== "string"){
        throw new Error("期望传入的方法名是以字符串的格式类型，而不是"+ (typeof methods[i]) + "类型");
      }
      this.methods.push(methods[i]);
    }
  }
  
  // 测试对象是否实现接口方法
  Interface.ensureImplements = function(object){
  
    if(arguments.length < 2){
      throw new Error("期望传入至少两个参数，这里仅传入"+arguments.length+"个参数");
    }
    for(var i = 1; i < arguments.length; i++){
      var interf = arguments[i];
      if(!(interf instanceof Interface)){
        throw new Error(arguments[i] + "不是一个接口");
      }
      for(var j = 0, methodsLen = interf.methods.length; j < methodsLen; j++){
        var method = interf.methods[j];
        if(!object[method] || typeof object[method] !== "function"){
          throw new Error("对象的方法 "+method+" 与接口 "+interf.name+" 定义的不一致");
        }
      }
    }
  }
  return Interface;
})() 

//接口
var Live = new Interface('Live',['eat','speak']);
var ComPro = new Interface('ComPro',['usb', 'sci', 'spi', 'I2C']);

// 实现RobotMouth、RobotEar接口
// 构造函数
var Robot = function(){
}; 

Robot.prototype = {

  // 实现Live接口
  eat: function(){
    console.log("I can eat");
  },
  speak: function(){
    console.log("I can speak Chinese");
  },
  // 实现ComPro接口
  usb: function () {
    console.log('use usb');
  },
  sci: function () {
    console.log('use sci');
  },
  spi: function () {
    console.log('use spi');
  },
  I2C: function () {
    console.log('use I2C');
  }
};

var myRobot = new Robot();

function useRobot(robot){
  Interface.ensureImplements(robot, Live, ComPro);
  robot.eat();
  robot.speak();
  robot.spi();
  robot.usb();
}

useRobot(myRobot);

