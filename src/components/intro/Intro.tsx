import React from 'react';
import "./Intro.css"

export default function Intro(props: any){
    return <div className="intro" id="intro">
        <h1>ReactJS</h1>
        ReactJS je JavaScript biblioteka za kreiranje Single-page aplikacija. <br/>
        Kao glavni cilj ima kreiranje korisničkih interfejsa. <br/>
        Zasniva se na kreiranju komponenata koje se mogu upotrebiti više puta.<br />
        React koristi JSX za kreiranje elemenata. JSX je deo JavaScript-a koji izgleda kao HTML kod, ali nije, već je kombinacija JavaScript-a i XML-a.
        Neki od atributa unutar ovih elemenata se mogu razlikovati od ekvivalenata u HTML-u. 
        Takodje prilikom pisanja atributa od dve ili vise reči koristi se camel case umesto "-".
        Iako se JSX često koristi nije obavezan prilikom pisanja React aplikacija.<br />
        Primer JSX-a:<br />
        <div className="code">
            {'return <div className="container">Zdravo!</div>'}
        </div>

    </div>
}