﻿function Queue() {
	this.dataStore = [];
	this.enqueue   = enqueue;
	this.dequeue   = dequeue;
	this.first     = first;
	this.end       = end;
	this.toString  = toString;
	this.empty     = empty;
}
// enqueue()方法向队尾添加一个元素： //
function enqueue(element) {
	this.dataStore.push(element);
}
// dequeue()方法删除队首的元素： //
function dequeue() {
	return this.dataStore.shift();
}
// 读取队首和队尾的元素： //
function first() {
	return this.dataStore[0];
}
function end() {
	return this.dataStore[this.dataStore.length - 1];
}
// toString()方法显示队列内的所有元素 //
function toString() {
	var retStr = "";
	for (var i = 0; i < this.dataStore.length; ++i) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}
// 需要一个方法判断队列是否为空 //
function empty() {
	if (this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}