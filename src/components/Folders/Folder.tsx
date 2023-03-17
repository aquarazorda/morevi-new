import { useNavigate } from 'solid-start';
import { match } from 'ts-pattern';
import { Folder as FolderType } from '~/lib/schemas/discogs';
import { classList } from '~/lib/utils';
import { btn } from '~/styles/button.css';
import { css } from '~/styles/sprinkles.css';

type Props = FolderType;

export const Folder = (folder: Props) => {
  const navigate = useNavigate();
  
  const FolderButton = () => <button
    class={classList([btn.black, css({ fontSize: 'extraLarge' })])}
    onClick={() => navigate(`/admin/folders/${folder.id}`)}>
    {folder.name}
  </button>;

  return match(folder.name)
    .with('All', 'Uncategorized', () => <></>)
    .otherwise(() => <FolderButton />)
}