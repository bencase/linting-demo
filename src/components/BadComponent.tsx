import { useEffect } from 'react';

interface IProps {
    name: string,
    loopCount: number,
}

export default (props: IProps) => {
    const { name, loopCount } = props;

    for (let i = 0; i < loopCount; i++) {
        useEffect(() => {
            console.log(`${name} is in iteration ${i} of its loop`);
        });
    }

    return (<div>{name}</div>);
};

