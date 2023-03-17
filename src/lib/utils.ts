import { pipe } from 'fp-ts/lib/function';
import { tryCatch, chain, left, right } from 'fp-ts/lib/TaskEither';
import { isMatching, P } from 'ts-pattern';

export const classList = (classes: string[]) => classes.join(' ');

export const mkReq = <T>(matcher: T, url: string) => pipe(
	tryCatch<string, P.infer<typeof matcher>>(
		() => fetch(url).then(res => res.json()),
		(error: any) => error?.message || error
	),
	chain((data) => isMatching(matcher, data) ? right(data) : left('Invalid data'))
);