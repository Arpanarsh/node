let add=function (a,b)
{
    return a+b;
}
let diff=function (a,b)
{
    return a-b;
}
let pro=function (a,b)
{
    return a*b;
}
let div=function (a,b)
{
    return a/b;
}
let obj={
    add:add,
    diff:diff,
    pro:pro,
    div:div
};

module.exports=obj;