import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';

import bbLogo from '../../assets/BlazBlue-Logo.png'
import paLogo from '../../assets/P4A-Logo.png'
import rwbyLogo from '../../assets/RWBY-Logo.png'
import uniLogo from '../../assets/UNIEL-Logo.png'
import ahLogo from '../../assets/AH3-Logo.png'

// COME BACK TO THIS AND MAKE IT AS PART OF THE PROFILE WHERE YUO CAN VIEW EDIT AND DELETE ROUTES THAT YOU HAVE MADE, OTHERWISE TIE IN THE POINT VALUE TO WHOEVER IT IS THAT YOU ARE USING

const useStyles = makeStyles({
    root: {
        position: 'relative'
    },
    paper: {
        position: 'absolute',
        top: 36,
        left: 0,
        right: 0,
        height:'30vh',
        overflowY: 'scroll',
        backgroundColor: 'white',
        textAlign: 'center',
        zIndex: 2
    },

    li: {
        backgroundColor: 'gray',
        width:'100%'
    }
})

const Point = (props) => {
    const [fate, setFate] = useState('BlazBlue');
    const [sel, setSel] = useState(fate === 'BlazBlue' ? 'Azrael' : fate === 'Persona Arena' ? 'Aegis' : fate === 'Under-Night' ? 'Carmine' : fate === 'RWBY' ? 'Blake' : 'Heart')
    const [openF, setOpenF] = useState(false)
    const [openC, setOpenC] = useState(false)
    // const fake = "insert stuff here"

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Button onClick={(e) => { setOpenF(!openF); setOpenC(false) }}>{fate}</Button>
            {/* replace thesse with the images for the franchise names */}
            {openF ? (
                <div className={classes.paper}>
                    <img src={bbLogo} alt="bb"className={classes.li} onClick={() => { setFate('BlazBlue'); setOpenF(false); setOpenC(true); console.log('BlazBlue selected') }}/>
                    <img src={paLogo} alt="pa" className={classes.li} onClick={() => { setFate('Persona Arena'); setOpenF(false); setOpenC(true); console.log('Persona Arena selected') }}/>
                    <img src={uniLogo} alt="uni" className={classes.li} onClick={() => { setFate('Under-Night'); setOpenF(false); setOpenC(true); console.log('Under Night selected') }}/>
                    <img src={rwbyLogo} alt="rwby" className={classes.li} onClick={() => { setFate('RWBY'); setOpenF(false); setOpenC(true); console.log('RWBY selected') }}/>
                    <img src={ahLogo} alt="ah" className={classes.li} onClick={() => { setFate('Arcana Heart'); setOpenF(false); setOpenC(true); console.log('Arcana Heart selected') }}/>
                </div>
            ) : null}
            {fate !== '' ? <Button onClick={(e) => { setOpenC(!openC); setOpenF(false) }}>{sel}</Button> : null}

                {/* maybe replace these with images? */}
            {openC && fate === 'BlazBlue' ? (
                <div className={classes.paper}>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Azrael' ? props.setLocalPartner('Solo') : props.setLocalPartner('Azrael'); setSel('Azrael'); setOpenC(false) }}>Azrael</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Es' ? props.setLocalPartner('Solo') : props.setLocalPartner('Es'); setSel('Es'); setOpenC(false) }}>Es</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Hakumen' ? props.setLocalPartner('Solo') : props.setLocalPartner('Hakumen'); setSel('Hakumen'); setOpenC(false) }}>Hakumen</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Hazama' ? props.setLocalPartner('Solo') : props.setLocalPartner('Hazama'); setSel('Hazama'); setOpenC(false) }}>Hazama</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Izayoi' ? props.setLocalPartner('Solo') : props.setLocalPartner('Izayoi'); setSel('Izayoi'); setOpenC(false) }}>Izayoi</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Jin' ? props.setLocalPartner('Solo') : props.setLocalPartner('Jin'); setSel('Jin'); setOpenC(false) }}>Jin</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Jubei' ? props.setLocalPartner('Solo') : props.setLocalPartner('Jubei'); setSel('Jubei'); setOpenC(false) }}>Jubei</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Mai' ? props.setLocalPartner('Solo') : props.setLocalPartner('Mai'); setSel('Mai'); setOpenC(false) }}>Mai</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Makoto' ? props.setLocalPartner('Solo') : props.setLocalPartner('Makoto'); setSel('Makoto'); setOpenC(false) }}>Makoto</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Naoto Kurogane' ? props.setLocalPartner('Solo') : props.setLocalPartner('Naoto Kurogane'); setSel('NaotoK'); setOpenC(false) }}>Naoto K</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Nine' ? props.setLocalPartner('Solo') : props.setLocalPartner('Nine'); setSel('Nine'); setOpenC(false) }}>Nine</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Noel' ? props.setLocalPartner('Solo') : props.setLocalPartner('Noel'); setSel('Noel'); setOpenC(false) }}>Noel</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Nu-13' ? props.setLocalPartner('Solo') : props.setLocalPartner('Nu-13'); setSel('Nu'); setOpenC(false) }}>Nu-13</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Platinum' ? props.setLocalPartner('Solo') : props.setLocalPartner('Platinum'); setSel('Platnum'); setOpenC(false) }}>Platinum</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Rachel' ? props.setLocalPartner('Solo') : props.setLocalPartner('Rachel'); setSel('Rachel'); setOpenC(false) }}>Rachel</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Ragna' ? props.setLocalPartner('Solo') : props.setLocalPartner('Ragna'); setSel('Ragna'); setOpenC(false) }}>Ragna</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Tager' ? props.setLocalPartner('Solo') : props.setLocalPartner('Tager'); setSel('Tager'); setOpenC(false) }}>Tager</p>
                </div>
            ) : openC && fate === 'Persona Arena' ? (
                <div className={classes.paper}>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Aegis' ? props.setLocalPartner('Solo') : props.setLocalPartner('Aegis'); setSel('Aegis'); setOpenC(false) }}>Aegis</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Akihiko' ? props.setLocalPartner('Solo') : props.setLocalPartner('Akihiko'); setSel('Akihko'); setOpenC(false) }}>Akihiko</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Chie' ? props.setLocalPartner('Solo') : props.setLocalPartner('Chie'); setSel('Chie'); setOpenC(false) }}>Chie</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Kanji' ? props.setLocalPartner('Solo') : props.setLocalPartner('Kanji'); setSel('Kanji'); setOpenC(false) }}>Kanji</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Labrys' ? props.setLocalPartner('Solo') : props.setLocalPartner('Labrys'); setSel('Labrys'); setOpenC(false) }}>Labrys</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Mitsuru' ? props.setLocalPartner('Solo') : props.setLocalPartner('Mitsuru'); setSel('Mitsuru'); setOpenC(false) }}>Mitsuru</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Naoto Shirogane' ? props.setLocalPartner('Solo') : props.setLocalPartner('Naoto Shirogane'); setSel('NaotoS'); setOpenC(false) }}>Naoto Shirogane</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Teddie' ? props.setLocalPartner('Solo') : props.setLocalPartner('Teddie'); setSel('Teddie'); setOpenC(false) }}>Teddie</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Yosuke' ? props.setLocalPartner('Solo') : props.setLocalPartner('Yosuke'); setSel('Yosuke'); setOpenC(false) }}>Yosuke</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Yu' ? props.setLocalPartner('Solo') : props.setLocalPartner('Yu'); setSel('Yu'); setOpenC(false) }}>Yu</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Yukiko' ? props.setLocalPartner('Solo') : props.setLocalPartner('Yukiko'); setSel('Yukiko'); setOpenC(false) }}>Yukiko</p>
                </div>
            ) : openC && fate === 'Under-Night' ? (
                <div className={classes.paper}>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Carmine' ? props.setLocalPartner('Solo') : props.setLocalPartner('Carmine'); setSel('Carmine'); setOpenC(false) }}>Carmine</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Gordeau' ? props.setLocalPartner('Solo') : props.setLocalPartner('Gordeau'); setSel('Gordeau'); setOpenC(false) }}>Gordeau</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Hyde' ? props.setLocalPartner('Solo') : props.setLocalPartner('Hyde'); setSel('Hyde'); setOpenC(false) }}>Hyde</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Linne' ? props.setLocalPartner('Solo') : props.setLocalPartner('Linne'); setSel('Linne'); setOpenC(false) }}>Linne</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Merkava' ? props.setLocalPartner('Solo') : props.setLocalPartner('Merkava'); setSel('Merkava'); setOpenC(false) }}>Merkava</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Mika' ? props.setLocalPartner('Solo') : props.setLocalPartner('Mika'); setSel('Mika'); setOpenC(false) }}>Mika</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Orie' ? props.setLocalPartner('Solo') : props.setLocalPartner('Orie'); setSel('Orie'); setOpenC(false) }}>Orie</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Seth' ? props.setLocalPartner('Solo') : props.setLocalPartner('Seth'); setSel('Seth'); setOpenC(false) }}>Seth</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Vatista' ? props.setLocalPartner('Solo') : props.setLocalPartner('Vatista'); setSel('Vatista'); setOpenC(false) }}>Vatista</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Waldstein' ? props.setLocalPartner('Solo') : props.setLocalPartner('Waldstein'); setSel('Waldstein'); setOpenC(false) }}>Waldstein</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Yuzuriha' ? props.setLocalPartner('Solo') : props.setLocalPartner('Yuzuriha'); setSel('Yuzuriha'); setOpenC(false) }}>Yuzuriha</p>
                </div>
            ) : openC && fate === 'RWBY' ? (
                <div className={classes.paper}>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Blake' ? props.setLocalPartner('Solo') : props.setLocalPartner('Blake'); setSel('Blake'); setOpenC(false) }}>Blake</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Ruby' ? props.setLocalPartner('Solo') : props.setLocalPartner('Ruby'); setSel('Ruby'); setOpenC(false) }}>Ruby</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Weiss' ? props.setLocalPartner('Solo') : props.setLocalPartner('Weiss'); setSel('Weiss'); setOpenC(false) }}>Weiss</p>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Yang' ? props.setLocalPartner('Solo') : props.setLocalPartner('Yang'); setSel('Yang'); setOpenC(false) }}>Yang</p>
                </div>
            ) : openC && fate === 'Arcana Heart' ? (
                <div className={classes.paper}>
                    <p className={classes.li} onClick={() => { props.localPoint === 'Heart' ? props.setLocalPartner('Solo') : props.setLocalPartner('Heart'); setSel('Heart'); setOpenC(false) }}>Heart</p>
                </div>
            ) : null}
        </div>
    )
}



export default Point