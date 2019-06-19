import React from 'react';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    bbStyle: {
        textAlign: 'center',
        backgroundColor: 'rgba(0, 125, 255, 0.4)'
    },

    paStyle: {
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 0, 0.4)'
    },

    uniStyle: {
        textAlign: 'center',
        backgroundColor: 'rgba(125, 0, 255, 0.4)'
    },

    rwbyStyle: {
        textAlign: 'center',
        backgroundColor: 'rgba(255, 0, 0, 0.4)'
    },

    ahStyle: {
        textAlign: 'center',
        backgroundColor: 'rgba(255, 135, 255, 0.4)'
    },
    buttonStyles: {
        border: 'none',
        backgroundColor: 'transparent'
    },
    imgStyle: {
        height: '7em'
    }
}))

const bbcast = [
    'http://www.dustloop.com/wiki/images/4/4a/BBTag_Azrael_Icon.png',
    'http://www.dustloop.com/wiki/images/2/23/BBTag_Es_Icon.png',
    'http://www.dustloop.com/wiki/images/5/54/BBTag_Hakumen_Icon.png',
    'http://www.dustloop.com/wiki/images/4/40/BBTag_Hazama_Icon.png',
    'http://www.dustloop.com/wiki/images/3/37/BBTag_Izayoi_Icon.png',
    'http://www.dustloop.com/wiki/images/6/6a/BBTag_Jin_Icon.png',
    'http://www.dustloop.com/wiki/images/8/8f/BBTag_Jubei_Icon.png',
    'http://www.dustloop.com/wiki/images/8/89/BBTag_Mai_Icon.png',
    'http://www.dustloop.com/wiki/images/5/59/BBTag_Makoto_Icon.png',
    'http://www.dustloop.com/wiki/images/d/d0/BBTag_NaotoK_Icon.png',
    'http://www.dustloop.com/wiki/images/0/0d/BBTag_Nine_Icon.png',
    'http://www.dustloop.com/wiki/images/2/2e/BBTag_Noel_Icon.png',
    'http://www.dustloop.com/wiki/images/9/9d/BBTag_Nu_Icon.png',
    'http://www.dustloop.com/wiki/images/f/fc/BBTag_Platinum_Icon.png',
    'http://www.dustloop.com/wiki/images/a/ab/BBTag_Rachel_Icon.png',
    'http://www.dustloop.com/wiki/images/2/2d/BBTag_Ragna_Icon.png',
    'http://www.dustloop.com/wiki/images/3/3a/BBTag_Tager_Icon.png'
]

const pacast = [
    'http://www.dustloop.com/wiki/images/7/75/BBTag_Aegis_Icon.png',
    'http://www.dustloop.com/wiki/images/4/41/BBTag_Akihiko_Icon.png',
    'http://www.dustloop.com/wiki/images/d/d5/BBTag_Chie_Icon.png',
    'http://www.dustloop.com/wiki/images/9/9c/BBTag_Kanji_Icon.png',
    'http://www.dustloop.com/wiki/images/6/63/BBTag_Labrys_Icon.png',
    'http://www.dustloop.com/wiki/images/0/01/BBTag_Mitsuru_Icon.png',
    'http://www.dustloop.com/wiki/images/5/54/BBTag_Naoto_Icon.png',
    'http://www.dustloop.com/wiki/images/5/58/BBTag_Teddie_Icon.png',
    'http://www.dustloop.com/wiki/images/1/14/BBTag_Yosuke_Icon.png',
    'http://www.dustloop.com/wiki/images/2/22/BBTag_Yu_Icon.png',
    'http://www.dustloop.com/wiki/images/a/aa/BBTag_Yukiko_Icon.png'
]

const unicast = [
    'http://www.dustloop.com/wiki/images/9/91/BBTag_Carmine_Icon.png',
    'http://www.dustloop.com/wiki/images/a/ac/BBTag_Gordeau_Icon.png',
    'http://www.dustloop.com/wiki/images/c/c4/BBTag_Hyde_Icon.png',
    'http://www.dustloop.com/wiki/images/b/b6/BBTag_Linne_Icon.png',
    'http://www.dustloop.com/wiki/images/c/c6/BBTag_Merkava_Icon.png',
    'http://www.dustloop.com/wiki/images/e/e9/BBTag_Mika_Icon.png',
    'http://www.dustloop.com/wiki/images/2/25/BBTag_Orie_Icon.png',
    'http://www.dustloop.com/wiki/images/e/e0/BBTag_Seth_Icon.png',
    'http://www.dustloop.com/wiki/images/5/5d/BBTag_Vatista_Icon.png',
    'http://www.dustloop.com/wiki/images/7/72/BBTag_Waldstein_Icon.png',
    'http://www.dustloop.com/wiki/images/c/ce/BBTag_Yuzuriha_Icon.png'
]

const rwbycast = [
    'http://www.dustloop.com/wiki/images/7/76/BBTag_Blake_Icon.png',
    'http://www.dustloop.com/wiki/images/a/a0/BBTag_Ruby_Icon.png',
    'http://www.dustloop.com/wiki/images/a/a3/BBTag_Weiss_Icon.png',
    'http://www.dustloop.com/wiki/images/7/78/BBTag_Yang_Icon.png'
]

const ahcast = [
    'http://www.dustloop.com/wiki/images/2/23/BBTag_Heart_Icon.png'
]

const MappedCast = (props) => {
    const classes = useStyles();
    return (
        <section>
            <div className={classes.bbStyle}>
                {bbcast.map((link, index) => {
                    // console.log(char)
                    // props.fetchCombos(); 
                    return (<button onClick={() => {props.setState({ ...props.state, 'right': false })}} className={classes.buttonStyles} key={index}>
                        <img className={classes.imgStyle} src={link} alt={index} /></button>)
                })}
            </div>
            <div className={classes.paStyle}>
                {pacast.map((link, index) => {
                    // console.log(char)
                    // props.fetchCombos(); 
                    return (<button onClick={() => {props.setState({ ...props.state, 'right': false })}} className={classes.buttonStyles} key={index}>
                        <img className={classes.imgStyle} src={link} alt={index} /></button>)
                })}
            </div>
            <div className={classes.uniStyle}>
                {unicast.map((link, index) => {
                    // console.log(char)
                    // props.fetchCombos(); 
                    return (<button onClick={() => {props.setState({ ...props.state, 'right': false })}} className={classes.buttonStyles} key={index}>
                        <img className={classes.imgStyle} src={link} alt={index} /></button>)
                })}
            </div>
            <div className={classes.rwbyStyle}>
                {rwbycast.map((link, index) => {
                    // console.log(char)
                    // props.fetchCombos(); 
                    return (<button onClick={() => {props.setState({ ...props.state, 'right': false })}} className={classes.buttonStyles} key={index}>
                        <img className={classes.imgStyle} src={link} alt={index} /></button>)
                })}
            </div>
            <div className={classes.ahStyle}>
                {ahcast.map((link, index) => {
                    // console.log(char)
                    // props.fetchCombos(); 
                    return (<button onClick={() => {props.setState({ ...props.state, 'right': false })}} className={classes.buttonStyles} key={index}>
                        <img className={classes.imgStyle} src={link} alt={index} /></button>)
                })}
            </div>
        </section>
    )
}

export default MappedCast;