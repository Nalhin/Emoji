import React, { createRef, useState, useEffect, useCallback } from "react";
//import emojiData from "../../emoji.json";
// import { Element } from 'react-scroll'
import "./Layout.scss";
import Group from "./Group/Group";
import Navbar from './Navbar/Navbar'
import { group } from '../../Module/GroupList';
import { debounce } from 'lodash'

const refs = group.reduce((acc, group) => {
    acc[group] = createRef();
    return acc;
}, []);



const Layout = () => {

    const [scroll, updateScroll] = useState('');


    const handleClick = group => {
        refs[group].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    const scrollHandler = useCallback(
        () => {
            const findClosest = ((element) => {
                return refs[element].current.offsetTop + refs[element].current.offsetHeight - 10 > window.pageYOffset
            })
            updateScroll(group.find(findClosest))
        },
        [],
    )

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', debounce(scrollHandler, 200))
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollHandler]);

    return (
        <div className="layout" >
            <Navbar click={handleClick} scroll={scroll}></Navbar>

            {group.map(group => (
                <div ref={refs[group]} key={group} >
                    <Group key={group} group={group} className="layout__groups" />
                </div>
            ))}

        </div>

    );
};


export default Layout;
