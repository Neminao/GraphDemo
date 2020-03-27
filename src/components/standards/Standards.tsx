import React from 'react';

export default function Standards(props: {}) {
    return <div>
        Primeri standarda:
        <ul>
            <li>
                Ukoliko je moguće izbegavati korišćenje class komponenta.
            </li>
            <li>
                Upotreba manjih komponenti.
            </li>
            <li>
                Ponavljanje komponenti umesto kreiranje novih.
            </li>
            <li>
                Bolje je pisati više manjih metoda, nego smeštati svu funkcionalnst u jednu.
            </li>
            <li>
                Ne treba preterivati sa upotrebom state-a i lifecycle metoda.
            </li>
            <li>
                Imena komponenti trebalo bi da poštoju pascal case i da se ime podudara sa imenom funkcije ili klase.
            </li>
            <li>
                Komponente bi trebalo odvojiti u sopstvene foldere po svojoj funkcionalnsti. 
                Deca komponente se mogu nalaziti u pod folderima, ali treba izbegavati ići previše u dubinu.
            </li>
            <li>
                Imena atributa elemenata poštuju camel case.
            </li>
            <li>
                Imena promenljivih i metoda poštuju camel case.
            </li>
            <li>
                CSS datoteke obično prate ime komponente za koju su namenjeni i nalaze se u istom folderu kao i komponenta.
                Mogu se koristiti i CSS modules.
            </li>
            <li>
                Imena CSS klasa uglavnom zavise od internog dogovora, ali mogu se poštovati i neki od CSS standarda.
            </li>
        </ul>
        Ovi su samo neki od standarda i nisu svi obavezni, ali mogu olakšati razvoj aplikacije.
    </div>
}