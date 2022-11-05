import { MASSAGES_ONLINE as message_data } from "../constant";
const Messages = () => {
	return (
		<section className="font-raleway text-base leading-4 text-[#29252E] bg-[#E5E5E5]">
			<aside className="overflow-x-hidden min-w-[375px]">
				<h4 className="ml-[27px]">Online</h4>
				<div className="online">
					{message_data.map((info, i) => {
						return (
							!info.messages &&
							info.online && (
								<div className="relative w-[49px] h-[49px]" key={i}>
									<info.img className="w-full h-full" />
									<div className="h-[13px] w-[13px] absolute top-[-5px] right-1 bg-green-600 rounded-full border-[3px] border-white"></div>
								</div>
							)
						);
					})}
				</div>
			</aside>
			<aside className=" mx-[27px]">
				<h4>My chats</h4>
				<div className="max-h-[486px] overflow-scroll mt-[21px] flex flex-col gap-5">
					{message_data.map((info, i) => {
						return (
							info.messages && (
								<div className="flex mt-3 items-center justify-between" key={i}>
									<div className="flex gap-[21px] items-center ">
										<div className="relative w-[49px] h-[49px]">
											<info.img className="w-full h-full" />
											{info.online && (
												<div className="h-[13px] w-[13px] absolute top-[-5px] right-1 bg-green-600 rounded-full border-[3px] border-white"></div>
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
								</div>
							)
						);
					})}
				</div>
			</aside>
		</section>
	);
};
export default Messages;
