import { request } from './../helpers/request';

interface characters {
	name: string;
	birth_year: string;
	eye_color: string;
	gender: string;
	hair_color: string;
	height: string;
	mass: string;
}

interface Response {
	count: number;
	next: string | null;
	previous: string | null;
	results: Characters[];
}

export const getCharacters = async (): Promise<Characters[]> => {
	const characters: Characters[] = [];
	let counter = 1;
	let response: Response;

	try {
		do {
			response = (await request.get(`/people/?page=${counter++}`)).data;
			characters.push(...response.results);
		} while (response.next);
	} catch {
		characters.splice(0, characters.length);
	}

	return characters;
};
