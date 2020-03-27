import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';
import './Components.css';

export default function(){
    return <div>
        <div>
            Komponente su osnovne gradivne jedinice u React-u. Nezavisne su u mogu se ponavljati po potrebi. 
            Mogu se kreirati uz pomoć funkcija ili klasa. Sve elementi jedne komponente moraju se nalaziti u jednom roditeljskom elementu koji komponenta vraća.
            Svaka komponenta mora sadžati import React-a.
        </div>
        <div className="flex-container">
        <ClassComponent />
        <FunctionalComponent />
        </div>
    </div>
}