// Prisma Library
import { PrismaClient } from '@prisma/client';

// PrismaClient variable
const prisma = new PrismaClient();

const main = async () => {
	// CREATE User
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: 'John Doe',
	// 		email: 'john@gmail.com',
	// 	},
	// });
	// console.log(user);

	// GET all users
	// const GetUsers = await prisma.user.findMany();
	// console.log(GetUsers);

	// Create article and associate it with user
	// const article = await prisma.article.create({
	// 	data: {
	// 		title: 'John First Article',
	// 		body: 'The article author is john',

	// 		// Associate the article to user with id of 1
	// 		author: {
	// 			connect: {
	// 				id: 1,
	// 			},
	// 		},
	// 	},
	// });
	// console.log(article);

	// GET all articles
	// const GetArticles = await prisma.article.findMany();
	// console.log(GetArticles);

	// Create a USER and ARTICLE and ASSOCIATE
	// const user = await prisma.user.create({
	// 	data: {
	// 		name: 'Sarah Smith',
	// 		email: 'sarah@gmail.com',

	// 		// Created Article and Associate with Sarah
	// 		articles: {
	// 			create: {
	// 				title: 'Sarah Article',
	// 				body: 'This article is created by sarah',
	// 			},
	// 		},
	// 	},
	// });
	// console.log(user);

	// Add Articles with Users in query
	// const users = await prisma.user.findMany({
	// 	// includes articles associated to that user
	// 	include: {
	// 		articles: true,
	// 	},
	// });
	// console.log(users);

	// Create an ARTICLE and USER and ASSOCIATE them
	// const article = await prisma.article.create({
	// 	data: {
	// 		title: 'Simple Article',
	// 		body: 'This is a simple article',

	// 		// Associate this new article to user with id of 2
	// 		author: {
	// 			connect: {
	// 				id: 2,
	// 			},
	// 		},
	// 	},
	// });
	// console.log(article);

	// Loop through all the Users with that user Articles
	// users.forEach((user) => {
	// 	console.log(`Name: ${user.name}, Email: ${user.email}`);
	// 	console.log('Articles:');

	// 	// Articles of that specific user
	// 	user.articles.forEach((article) => {
	// 		console.log(`- Title: ${article.title}, Body: ${article.body}`);
	// 	});
	// 	console.log('\n');
	// });

	// Update single data
	const update = await prisma.user.update({
		where: {
			id: 1,
		},
		data: {
			name: 'John Doe Jr.',
		},
	});
	console.log(update);

	// Delete single data
	const remove = await prisma.article.delete({
		where: {
			id: 2,
		},
	});
	console.log(remove);

	// GET all articles
	const getArticles = await prisma.article.findMany();
	console.log(getArticles);
};

// call to run the function
main()
	.then(async () => {
		// disconnect to database
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		// Log the erro
		console.error(e);

		// stop the process and disconnect
		await prisma.$disconnect();
		process.exit(1);
	});
