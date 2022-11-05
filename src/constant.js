import { ReactComponent as Online1 } from "../src/assets/images/online_image1.svg";
import { ReactComponent as Online2 } from "../src/assets/images/online_image2.svg";
import { ReactComponent as Online3 } from "../src/assets/images/online_image4.svg";
import { ReactComponent as Online4 } from "../src/assets/images/online_image4.svg";
import { ReactComponent as Online5 } from "../src/assets/images/online_image5.svg";
import { ReactComponent as Online6 } from "../src/assets/images/online_image6.svg";
import { ReactComponent as Anne_image } from "../src/assets/images/message_img1.svg";
import { ReactComponent as Sara_image } from "../src/assets/images/message_img2.svg";
import { ReactComponent as John_Smith_image } from "../src/assets/images/message_img3.svg";
import { ReactComponent as John_Snow_image } from "../src/assets/images/message_img4.svg";
import { ReactComponent as Sara_image2 } from "../src/assets/images/message_img5.svg";
import { ReactComponent as John_Smith_image2 } from "../src/assets/images/message_img6.svg";
import { ReactComponent as John_Snow_image2 } from "../src/assets/images/message_img7.svg";

export const MASSAGES_ONLINE = [
	{
		name: "user1",
		img: Online1,
		img_alt: "user1",
		online: true,
	},
	{
		name: "user2",
		img: Online2,
		img_alt: "user1",
		online: true,
	},
	{
		name: "user3",
		img: Online3,
		img_alt: "user3",
		online: true,
	},
	{
		name: "user4",
		img: Online4,
		img_alt: "user4",
		online: true,
	},
	{
		name: "user5",
		img: Online5,
		img_alt: "user5",
		online: true,
	},
	{
		name: "user6",
		img: Online6,
		img_alt: "user6",
		online: true,
	},
	{
		name: "Anne Snow",
		img: Anne_image,
		img_alt: "Anne Snow",
		messages: ["did you get it?", "Hello!"],
		online: true,
		read: false,
	},
	{
		name: "Sara Williams",
		img: Sara_image,
		img_alt: "Sara Williams",
		messages: ["Hello!", "Hi", "okay", "Thank you for the support"],
		online: false,
		read: false,
	},
	{
		name: "John Smith",
		img: John_Smith_image,
		img_alt: "John Smith",
		messages: ["Hello!", "No worries"],
		online: false,
		read: true,
	},
	{
		name: "John Snow",
		img: John_Snow_image,
		img_alt: "John Snow",
		messages: ["Hello!", "Hello!"],
		online: true,
		read: true,
	},
	{
		name: "Sara Williams",
		img: Sara_image2,
		img_alt: "Sara Williams",
		messages: ["Hello!", "Hi", "okay", "Thank you for the support"],
		online: false,
		read: true,
	},
	{
		name: "John Smith",
		img: John_Smith_image2,
		img_alt: "John Smith",
		messages: ["Hello!", "No worries"],
		online: true,
		read: true,
	},
	{
		name: "John Snow",
		img: John_Snow_image2,
		img_alt: "John Snow",
		messages: ["Hello!", "No worries"],
		online: false,
		read: true,
	},
];
