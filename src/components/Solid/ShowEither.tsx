import { Either, isRight } from 'fp-ts/lib/Either';
import { JSX, Show } from 'solid-js';

type Props<T> = {
  either?: Either<unknown, T>;
  fallback?: JSX.Element;
  children: (value: T) => JSX.Element;
}

export const ShowEither = <T,>(props: Props<T>) =>
  <Show when={props.either && isRight(props.either)} fallback={props.fallback || "Invalid data"}>
    {
      // @ts-ignore
      props.children(props.either.right)
    }
  </Show>