import { style, styleVariants } from '@vanilla-extract/css';
import { css } from './sprinkles.css';

const base = style({
	border: 'none',
	font: 'inherit',
	cursor: 'pointer',
	outline: 'inherit',
	padding: '0 12px',
	lineHeight: '19px',
	fontWeight: 800,
	fontSize: 16,
	height: 32
});

const plain = [
	base,
	style({ background: 'none' }),
	css({ color: 'textPrimary' })
];

const black = [
	base,
	css({ borderRadius: 'medium', backgroundColor: 'bgButton', color: 'textPrimary' })
]

export const btn = styleVariants({
	plain,
	black
});
