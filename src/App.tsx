import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { MainContent } from "./Components/MainContent";
import styled from "styled-components";


function App() {
	const Wrapper = styled.div`
		height: 100vh;
		width: 100vw;
		background-color: gray;
		`;
		const queryClient = new QueryClient()
		return (
			<QueryClientProvider client={queryClient}>
			<Wrapper>
				<MainContent  />
			</Wrapper>
			</QueryClientProvider>
		);
}
export default App;
