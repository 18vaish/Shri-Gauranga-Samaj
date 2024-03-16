"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search'; // Import the Search icon from Material-UI

export default function SearchDropdown() {
    const [value, setValue] = React.useState<any | null>(options[0].title);

    const handleOptionClick = (option: { title: any; }) => {
        setValue(option.title);
    };

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                freeSolo
                disableClearable
                onChange={(e, val) => setValue(val)}
                value={value}
                options={options}
                renderOption={(props, option) => (
                    <div
                        style={{ backgroundColor: '#FCDFA0', padding: '8px', border: '1px solid black', cursor: 'pointer' }}
                        onClick={() => handleOptionClick(option)}
                    >
                        <div style={{fontWeight:'bold'}}>{option.title}</div>
                        <div style={{ fontSize: '0.8rem' }}>{option.subtitle}</div>
                    </div>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size='small'
                        label="Search input"
                        InputProps={{
                            ...params.InputProps,
                            sx: { borderRadius: 3 },
                            type: 'search',
                            endAdornment: (
                                <SearchIcon color="action" sx={{ mr: 1 }} /> // Add SearchIcon as the endAdornment
                            ),
                        }}
                    />
                )}
            />
        </Stack>
    );
}

const options = [
    { title: 'Articles', subtitle: 'Who is RadhaKrishna?' },
    { title: 'Books', subtitle: 'RadhaKrishna - Eternal love' },
    { title: 'Booklets', subtitle: 'RadhaKrishna - Eternal love RadhaKrishna - Eternal love' },
];
