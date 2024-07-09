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
	const article = await prisma.article.create({
		data: {
			title: 'John First Article',
			body: 'The article author is john',

			// Associate the article to user with id of 1
			author: {
				connect: {
					id: 1,
				},
			},
		},
	});
	console.log(article);
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
