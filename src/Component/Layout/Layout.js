import React, { createRef, useState, useEffect, useCallback } from "react";
//import emojiData from "../../emoji.json";
// import { Element } from 'react-scroll'
import "./Layout.scss";
import Group from "./Group/Group";
import Navbar from './Navbar/Navbar'
import { group } from '../../Module/GroupList';
import { debounce } from 'lodash'
import { emojiArray } from '../../Module/test'
import { connect } from 'react-redux';

const refs = group.reduce((acc, group) => {
    acc[group] = createRef();
    return acc;
}, []);



const Layout = ({ search }) => {
    // console.log(group)
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
                return refs[element].current.offsetTop + refs[element].current.offsetHeight > window.pageYOffset
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

            {emojiArray.map((row, index) => (

                < div ref={refs[group[index]]} key={group[index]} >
                    {
                        row.find(emoji => emoji.name.includes(search)) ?
                            <Group key={group[index]} group={group[index]} row={row} className="layout__groups" />
                            : null
                    }
                </div>

            ))}

        </div>

    );
};
const mapStateToProps = (state) => {

    return { search: state.search };
}

export default connect(mapStateToProps)(Layout)


