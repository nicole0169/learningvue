function* quips(name) {
    yield "Hi" + name + "!";
    yield "Continued...";
}

var iter = quips('lily');

console.log(iter);

iter.next()