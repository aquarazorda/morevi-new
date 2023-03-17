import { style } from '@vanilla-extract/css';
import { flexCentered } from '~/styles/common.css';
import { css } from '~/styles/sprinkles.css';

export const foldersWrapper = style([
  flexCentered,
  style({
    flexWrap: 'wrap'
  }),
  css({
    gap: 'medium',
    fontSize: 'extraLarge'
  })
]);
