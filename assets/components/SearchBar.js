import React, {useEffect, useState} from 'react';

import {useCombobox} from 'downshift';

function SearchBar() {

    
    return (<div className="SearchBar">
        <input type="text" placeholder="Rechercher..." />
        </div>

    );
};

export default SearchBar;