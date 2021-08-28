import {
	AppBar,
	IconButton,
	Toolbar,
	Typography,
	Switch,
	InputBase
} from "@material-ui/core";
import React, { useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

const words = {
	english: {
		flag: "🎏",
		search: "Search"
	},
	french: {
		flag: "🏴",
		search: "Chercher"
	},
	spanish: {
		flag: "🎌",
		search: "Buscar"
	}
};

function Navbar(props) {
	const { classes } = props;
	const { language } = useContext(LanguageContext);
	const { search, flag } = words[language];
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	return (
		<div className={classes.root}>
			<AppBar position='static' color={isDarkMode ? "default" : "primary"}>
				<Toolbar>
					<IconButton className={classes.menuButton} color='inherit'>
						<span>{flag}</span>
					</IconButton>
					<Typography className={classes.title} variant='h6' color='inherit'>
						App Title
					</Typography>
					<Switch onChange={toggleTheme} />
					<div className={classes.grow} />
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder={`${search}...`}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default withStyles(styles)(Navbar);
