// import { Input } from "@mui/base";
import { IconButton, InputBase, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import React, { useState } from "react";

function Nav() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="nav">
      <div className="logo">
        <h2>Logo</h2>
      </div>

      <div className="search">
        <TextField
          label="Search"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
          sx={{background:"#fff", borderRadius:"5px"}}
          InputProps={{
            endAdornment: (
              <IconButton sx={{background:"#fb6724", borderRadius:"2rem"}}>
                <SearchIcon />
              </IconButton>
            ),
          }}
          fullWidth
          margin="normal"
        />
      </div>

      <div className="sign-in">
        <LanguageIcon />
        <p>Sign In</p>
      </div>
    </div>
  );
}

export default Nav;
