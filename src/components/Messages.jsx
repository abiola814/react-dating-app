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
					<Link
						to={`/${message_data[11].id}`}
						className="flex mt-3 items-center justify-between"
						key={message_data[11].id}
					>
						<div className="flex gap-[21px] items-center ">
							<div className="relative w-[49px] h-[49px]">
								<img
									src={message_data[11].img}
									alt={message_data[11].img_alt}
									className="w-full h-full"
								/>
								{message_data[11].online && (
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								)}
							</div>
							<div className="flex flex-col gap-[3px] self-start mt-2">
								<h5>{message_data[11].name}</h5>
								{message_data[11].read ? (
									<p className="read">
										{
											message_data[11].messages[
												message_data[11].messages.length - 1
											]
										}
									</p>
								) : (
									<p className="not-read">
										{
											message_data[11].messages[
												message_data[11].messages.length - 1
											]
										}
									</p>
								)}
							</div>
						</div>
						{!message_data[11].read && (
							<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
								{message_data[11].messages.length}
							</div>
						)}
					</Link>
					<Link
						to={`/${message_data[12].id}`}
						className="flex mt-3 items-center justify-between"
						key={message_data[12].id}
					>
						<div className="flex gap-[21px] items-center ">
							<div className="relative w-[49px] h-[49px]">
								<img
									src={message_data[12].img}
									alt={message_data[12].img_alt}
									className="w-full h-full"
								/>
								{message_data[12].online && (
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								)}
							</div>
							<div className="flex flex-col gap-[3px] self-start mt-2">
								<h5>{message_data[12].name}</h5>
								{message_data[12].read ? (
									<p className="read">
										{
											message_data[12].messages[
												message_data[12].messages.length - 1
											]
										}
									</p>
								) : (
									<p className="not-read">
										{
											message_data[12].messages[
												message_data[12].messages.length - 1
											]
										}
									</p>
								)}
							</div>
						</div>
						{!message_data[12].read && (
							<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
								{message_data[12].messages.length}
							</div>
						)}
					</Link>
					<Link
						to={`/${message_data[13].id}`}
						className="flex mt-3 items-center justify-between"
						key={message_data[13].id}
					>
						<div className="flex gap-[21px] items-center ">
							<div className="relative w-[49px] h-[49px]">
								<img
									src={message_data[13].img}
									alt={message_data[13].img_alt}
									className="w-full h-full"
								/>
								{message_data[13].online && (
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								)}
							</div>
							<div className="flex flex-col gap-[3px] self-start mt-2">
								<h5>{message_data[13].name}</h5>
								{message_data[13].read ? (
									<p className="read">
										{
											message_data[13].messages[
												message_data[13].messages.length - 1
											]
										}
									</p>
								) : (
									<p className="not-read">
										{
											message_data[13].messages[
												message_data[13].messages.length - 1
											]
										}
									</p>
								)}
							</div>
						</div>
						{!message_data[13].read && (
							<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
								{message_data[13].messages.length}
							</div>
						)}
					</Link>
					<Link
						to={`/${message_data[14].id}`}
						className="flex mt-3 items-center justify-between"
						key={message_data[14].id}
					>
						<div className="flex gap-[21px] items-center ">
							<div className="relative w-[49px] h-[49px]">
								<img
									src={message_data[14].img}
									alt={message_data[14].img_alt}
									className="w-full h-full"
								/>
								{message_data[14].online && (
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								)}
							</div>
							<div className="flex flex-col gap-[3px] self-start mt-2">
								<h5>{message_data[14].name}</h5>
								{message_data[14].read ? (
									<p className="read">
										{
											message_data[14].messages[
												message_data[14].messages.length - 1
											]
										}
									</p>
								) : (
									<p className="not-read">
										{
											message_data[14].messages[
												message_data[14].messages.length - 1
											]
										}
									</p>
								)}
							</div>
						</div>
						{!message_data[14].read && (
							<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
								{message_data[14].messages.length}
							</div>
						)}
					</Link>
					<Link
						to={`/${message_data[15].id}`}
						className="flex mt-3 items-center justify-between"
						key={message_data[15].id}
					>
						<div className="flex gap-[21px] items-center ">
							<div className="relative w-[49px] h-[49px]">
								<img
									src={message_data[15].img}
									alt={message_data[15].img_alt}
									className="w-full h-full"
								/>
								{message_data[15].online && (
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								)}
							</div>
							<div className="flex flex-col gap-[3px] self-start mt-2">
								<h5>{message_data[15].name}</h5>
								{message_data[15].read ? (
									<p className="read">
										{
											message_data[15].messages[
												message_data[15].messages.length - 1
											]
										}
									</p>
								) : (
									<p className="not-read">
										{
											message_data[15].messages[
												message_data[15].messages.length - 1
											]
										}
									</p>
								)}
							</div>
						</div>
						{!message_data[15].read && (
							<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
								{message_data[15].messages.length}
							</div>
						)}
					</Link>
					<Link
						to={`/${message_data[16].id}`}
						className="flex mt-3 items-center justify-between"
						key={message_data[16].id}
					>
						<div className="flex gap-[21px] items-center ">
							<div className="relative w-[49px] h-[49px]">
								<img
									src={message_data[16].img}
									alt={message_data[16].img_alt}
									className="w-full h-full"
								/>
								{message_data[16].online && (
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								)}
							</div>
							<div className="flex flex-col gap-[3px] self-start mt-2">
								<h5>{message_data[16].name}</h5>
								{message_data[16].read ? (
									<p className="read">
										{
											message_data[16].messages[
												message_data[16].messages.length - 1
											]
										}
									</p>
								) : (
									<p className="not-read">
										{
											message_data[16].messages[
												message_data[16].messages.length - 1
											]
										}
									</p>
								)}
							</div>
						</div>
						{!message_data[16].read && (
							<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
								{message_data[16].messages.length}
							</div>
						)}
					</Link>
					<Link
						to={`/${message_data[17].id}`}
						className="flex mt-3 items-center justify-between"
						key={message_data[17].id}
					>
						<div className="flex gap-[21px] items-center ">
							<div className="relative w-[49px] h-[49px]">
								<img
									src={message_data[17].img}
									alt={message_data[17].img_alt}
									className="w-full h-full"
								/>
								{message_data[17].online && (
									<div className="h-[13px] w-[13px] absolute top-[-1px] right-0 bg-green-600 rounded-full border-[3px] border-white"></div>
								)}
							</div>
							<div className="flex flex-col gap-[3px] self-start mt-2">
								<h5>{message_data[17].name}</h5>
								{message_data[17].read ? (
									<p className="read">
										{
											message_data[17].messages[
												message_data[17].messages.length - 1
											]
										}
									</p>
								) : (
									<p className="not-read">
										{
											message_data[17].messages[
												message_data[17].messages.length - 1
											]
										}
									</p>
								)}
							</div>
						</div>
						{!message_data[17].read && (
							<div className="w-[21px] h-[21px] bg-primary text-white flex justify-center rounded-full">
								{message_data[17].messages.length}
							</div>
						)}
					</Link>
				</div>
			</aside>
		</section>
	);
};
export default Messages;
