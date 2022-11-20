import { Link } from "react-router-dom";

const Messages = ({ message_data }) => {
	return (
		<section className="font-raleway text-base leading-4 text-[#29252E]">
			<aside className="overflow-x-hidden max-w-[375px]">
				<h4 className="ml-[27px]">Online</h4>
				<div className="online">
					{message_data.map((info, i) => {
						return (
							!info.messages &&
							info.online && (
								<div className="relative w-[49px] h-[49px]" key={i}>
									<img
										src={info.img}
										alt={info.alt}
										className="w-full h-full"
									/>
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								</div>
							)
						);
					})}
				</div>
			</aside>
			<aside className=" mx-[27px]">
				<h4>My chats</h4>
				<div className="max-h-[486px] overflow-scroll mt-[21px] flex flex-col gap-5">
					
					{/* wondering if this is where the issues is from... looping and adding each data?*/}
					{message_data.map((info, i) => {
						return (
							info.messages && (
								<Link
									to={`/${info.id}`}
									className="flex mt-3 items-center justify-between"
									key={i}
								>
									<div className="flex gap-[21px] items-center ">
										<div className="relative w-[49px] h-[49px]">
											<img
												src={info.img}
												alt={info.img_alt}
												className="w-full h-full"
											/>
											{info.online && (
												<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
											)}
										</div>
										<div className="flex flex-col gap-[3px] self-start mt-2">
											<h5>{info.name}</h5>
											{info.read ? (
												<p className="read">
													{info.messages[info.messages.length - 1]}
												</p>
											) : (
												<p className="not-read">
													{info.messages[info.messages.length - 1]}
												</p>
											)}
										</div>
									</div>
									{!info.read && (
										<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
											{info.messages.length}
										</div>
									)}
								</Link>
							)
						);
					})}
				</div>
			</aside>
		</section>
	);
};
export default Messages;
