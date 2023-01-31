/* eslint-disable @typescript-eslint/no-unused-vars */
// type DropDownProps<A> = {
//     data:Array<string | number>
//     label?: never;
//     valueProps?:never;
// } | {
//     data:Array<A>;
//     label: keyof A;
//     valueProps:keyof A;
// }

// export function DropDown<T>(props:DropDownProps<T>){
//     return <pre>{JSON.stringify(props)}</pre>
// }

// function DebugInApp(){
//     return <DropDown data={[{a:1,b:2,c:1}]} label='a' valueProps='b'/>
//     // return <DropDown data={['a','b']} label='anchor' valueProps='at'/> // THIS IS THE ISSUE ***********
// }
// -----------------------------
type DropDownProps<A> = A extends number | string ? {
    data:Array<string | number>
    label?: never;
    valueProps?:never;
} : {
    data:Array<A>;
    label: keyof A;
    valueProps:keyof A;
}

export function DropDown<T>(props:DropDownProps<T>){
    return <pre>{JSON.stringify(props)}</pre>
}

function DebugInApp(){
    // return <DropDown data={["a","b"]}  /> //Check 1
    return <DropDown data={[{id:1,name:'A'},{id:2,name:'b'}]} label='id' valueProps='name'  /> //Check 2
}