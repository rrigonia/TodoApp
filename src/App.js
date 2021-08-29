import "./App.css";
import React from "react";

// import Form from "./Form";
// import Navbar from "./Navbar";
// import PageContent from "./PageContent";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import { LanguageProvider } from "./contexts/LanguageContext";
import TodoApp from "./TodoApp";

function App() {
	return (
		// <ThemeProvider>
		// 	<LanguageProvider>
		// 		<PageContent>
		// 			<Navbar />
		// 			<Form />
		// 		</PageContent>
		// 	</LanguageProvider>
		// </ThemeProvider>

		<TodoApp />
	);
}

export default App;
