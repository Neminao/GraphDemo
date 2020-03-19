import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

export default function(){
    return <div>
        <div>
            Komponente su osnovne gradivne jedinice u React-u. Nezavisne su u mogu se ponavljati po potrebi. 
            Mogu se kreirati uz pomoc function-a ili class-a. Sve elementi moraju se nalaziti u jednom roditeljskom elementu.
        </div>
        <div className="flex-container">
        <ClassComponent />
        <FunctionalComponent />
        </div>
    </div>
}