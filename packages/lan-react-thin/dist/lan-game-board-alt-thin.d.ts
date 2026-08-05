import React from 'react';

export interface LanGameBoardAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGameBoardAltThin(props: LanGameBoardAltThinProps): React.ReactElement;
export default LanGameBoardAltThin;
