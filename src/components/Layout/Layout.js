import React from "react";

import classes from "./Layout.css";

// type of Higher Order Component
const layout = (props) => (
	<React.Fragment>
		<div>Toolbar, SideDrawer, Backdrop</div>
		<main className={classes.Content}>
			{props.children}
		</main>
	</React.Fragment>
);

export default layout;