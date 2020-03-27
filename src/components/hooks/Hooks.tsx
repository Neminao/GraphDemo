import React from 'react';
import HookState from './HookState';
import HookEffect from './HookEffect';

export default function Hooks(props: {}) {


    return <div>
        <div>Hooks su relativno "nova" stvar u React-u. 
        Koriste se da bi se realizovao state u funkcionalnim komponentama. 
        Pre uvođenja hooks sve funkcionalne komponente bile su stateless.
        Takođe, hooks ne služe samo za state, mogu služiti i za lifecycle metode, a možemo i sami praviti hooks po potrebi.
        Cilj hooks je da se u sto većoj meri zamene class komponente.
        </div>
        <HookState />
        <HookEffect />
        
    </div>
}