import * as React from "react";

interface MyHooksProps {
    title: string;
    id: string;
}

export function MyHooks({title, id}: MyHooksProps) {

    // React.useEffect(() => {
    //     console.log('componentDidMount')
    //     return () => {
    //         console.log('componentWillUnmount')
    //     }
    // }, []);
    // React.useEffect(() => {
    //     console.log('componentWillUpdate')
    // }, []);
    //
    // React.useEffect(() => {
    //     console.log('componentWillReceiveProps: ', title)
    // }, [title]);

    const [isMounted] = useIsMounted()

    // React.useEffect(() => {
    //     console.log('isMounted' , isMounted)
    // }, [isMounted])

    const items = 10
    const multiplier = 5
    const result = React.useMemo(
        () => calculate(items ,multiplier),
        [items, multiplier]
    )
    return (
        <div>{title} {id} {result}</div>
    )
}

function useIsMounted() {
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return [isMounted]
}

interface calculateProps {
    items: number;
    multiplier: number;
}

function calculate(items: number, multiplier: number) {
    return new Array(items).fill(1).reduce((a, v) => a * multiplier)
}

