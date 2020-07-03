// ASYNC

const second=()=>{
    setTimeout(() => {
        console.log('Hey there');
    }, 2000);
}

const first=()=>{
    console.log('Hey');
    second();
    console.log('End');
}

first();