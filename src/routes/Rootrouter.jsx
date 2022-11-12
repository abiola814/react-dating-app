import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "../components/Chat";
import Interests from "../components/Interests";
import Messages from "../components/Messages";
import Questions from "../components/Questions";
import { MASSAGES_ONLINE as message_data } from "../constant";
const Rootrouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<Messages message_data={message_data} />} />
				<Route path="/interests" element={<Interests />} />
				<Route path="/select" element={<Questions />} />
				<Route path="/:id" element={<Chat message_data={message_data} />} />
			</Routes>
		</Router>
	);
};
export default Rootrouter;
