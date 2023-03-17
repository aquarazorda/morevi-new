import { For } from 'solid-js';
import { Folders as FoldersType } from '~/lib/schemas/discogs'
import { Folder } from './Folder';
import { foldersWrapper } from './folders.css';

type Props = FoldersType;
export const Folders = (data: Props) => <div class={foldersWrapper}>
  {data.map(Folder)}
</div>