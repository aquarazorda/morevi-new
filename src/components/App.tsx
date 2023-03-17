import { Portal } from 'solid-js/web';
import { FileRoutes, Routes } from 'solid-start';
import { bodyStyle } from '~/styles/common.css';
import { Header } from './Header';
import { Modal } from './Modal';

export const App = () => {
	return <div class={bodyStyle}>
		<Header />
		<Routes>
			<FileRoutes />
		</Routes>
		<Portal>
			<Modal />
		</Portal>
	</div>;
};