import { Either, isRight } from 'fp-ts/lib/Either';
import { JSX, Match, Show, Switch } from 'solid-js';

type Props<T> = {
  either: Either<unknown, T>;
  fallback: JSX.Element;
  children: (value: T) => JSX.Element;
}

export const ShowEither = <T,>(props: Props<T>) =>
  <Show when={isRight(props.either)} fallback={props.fallback}>
    {
      // @ts-ignore
      props.children(props.either.right)
    }
  </Show>

{/* <Switch fallback={props.fallback}>
<Match when={isRight(props.either)}>
  {
    // @ts-ignore
    props.children(props.either.right)
  }
</Match>
</Switch> */}