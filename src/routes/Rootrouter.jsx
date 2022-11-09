import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "../components/Chat";
import Messages from "../components/Messages";
import { MASSAGES_ONLINE as message_data } from "../constant";
const Rootrouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/*" element={<Messages message_data={message_data} />} />
				<Route path="/:id" element={<Chat message_data={message_data} />} />
			</Routes>
		</Router>
	);
};
export default Rootrouter;
