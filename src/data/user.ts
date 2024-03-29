import { faReact } from "@fortawesome/free-brands-svg-icons";


const INFO = {
	main: {
		title: "folio by Godwin",
		name: "Godwin Chinedu.",
		email: "chinedu.go@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/GoChinedu/",
		github: "https://github.com/G0dgood",
		linkedin: "https://www.linkedin.com/in/godwin-chinedu-okoro-765583139/",
		instagram: "https://www.instagram.com/chinedu12366/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://www.facebook.com/godgood.chinedu/",
	},

	homepage: {
		title: "Front-End Web Developer and Mobile Developer.",
		description:
			"I am a Front-End Web Developer and Mobile Developer with over five years of experience, I specialize in building scalable and secure web applications using frameworks such as React, React Native, Next.js, Redux, and styling tools like Tailwind CSS, Material UI, and Style Component, with proficiency in Figma for UI/UX design and Git/GitHub for version control.",
	},

	about: {
		title: "Godwin Chinedu. I live in Lagos, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Outcess Web Application",
			description:
				`Outcess is an integrated customer engagement and business process outsourcing company. We deliver innovative digital solutions that empower and optimize the performance of people, teams and organizations.`,
			svg:  faReact,
			linkText: "View Project",
			link: "https://outcess.netlify.app/",
		},
		{
			title: "Weather Application",
			description:
				`The term "weather" refers to the atmospheric conditions in a specific location at a given time. It includes factors such as temperature, humidity, wind speed and direction, precipitation (rain, snow, etc.), cloud cover, and atmospheric pressure.`,
			svg:  faReact,
			linkText: "View Project",
			link: "https://real-weather-rouge.vercel.app/",
		},

		{
			title: "Next Basket",
			description:"An E-commerce classified app",
			svg: "",
			linkText: "View Project",
			link: "https://next-basket-app.vercel.app/",
		} ,
		{
			title: "Super Leads",
			description:
				"Simple lead tracking. Powerful reporting.Turn your team on to productivity with Super lead the lead tracker..",
			svg: faReact,
			linkText: "View Project",
			link: "https://task-leads.vercel.app/",
		},


		{
			title: "Task Flow",
			description:
				"A UI task management Application with drag and drop.",
   svg:"",
			linkText: "View Project",
			link: "https://task-flow-vert.vercel.app/",
		},
		{
			title: "Ramos",
			description:
				"Analytics that helps you laptop shape the future.",
   svg:faReact,
			linkText: "View Project",
			link: "https://ramos-drab.vercel.app/",
		},
		{
			title: "Perfect Recipes",
			description:
				"Perfect Recipes For Everyone!.",
   svg:faReact,
			linkText: "View Project",
			link: "https://foodrecipeandmenu.netlify.app/",
		},
	],
};

export default INFO;
