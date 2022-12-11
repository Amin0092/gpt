// import React from "react";
// import {preventDefault} from "./utils/react/preventDefault";
// import {stopPropagation} from "./utils/react/StopPropagation";
// import {getChecked, getValue} from "./utils/react/PickFromSyntheticEvent";
//
// add(1)(1)
//
// function add(leftSide: number) {
//     return (rightSide: number) => leftSide + rightSide
// }
//
// const addOne = add(1)
// const addSix = add(6)
//
// addOne(5);
//
// window.onresize = () => {
// }
//
// function addEventListenerWithDispose(element, name, handler) {
//     element.addEventListener(name, handler);
//     return () => element.removeEventListener(name, handler)
// }
//
// const dispose = addEventListenerWithDispose(window, 'resize', () => {
//     console.log('resize')
//     dispose()
// })
//
// const withIdKey = withKey('id')
// const withIndexKey = withKey()
//
// interface IBlockProps {
//     title: string;
//     id: string;
// }
//
// function Feed(props: { blocks: IBlockProps[] }) {
//     return (
//         <div>
//             {props.blocks.map(withIdKey(Block))}
//         </div>
//     )
// }
//
// function Block(props: IBlockProps) {
//     return (
//         <div>{props.title}</div>
//     )
// }
//
// function withKey(key?: string) {
//     return <E, T extends React.ComponentType<E>>(component: T) =>
//         (props: E, index: number) =>
//             React.createElement(
//                 component,
//                 {...props, key: key ? props[key as keyof E] : index},
//                 []
//             )
// }
//
// //
//
// function Input({onChange, value}: { onChange: (value: string) => void, value: string }) {
//     return (
//         <input type="text" value={value} onChange={getValue(onChange)}/>
//     )
// }
//
// function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
//     return (
//         <input type="text" checked={props.value} onChange={getChecked(props.onChange)}/>
//     )
// }
//
// //
//
// function NotStandardLink(props: any) {
//     return (
//         <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
//     )
// }
//
// interface InputProps {
//     onChange: (value: string) => void;
//     value: string;
// }
//
// function Input1(props: InputProps ) {
//     return(
//         <input type="text" value={props.value} onChange={preventDefault(stopPropagation(getValue(props.onChange)))}/>
//     )
// }