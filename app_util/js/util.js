foo (profile => {
    return profile;
})

function bar(){
    console.log('bar')
}

module.exports = {
    foo: foo,
    bar: bar
}