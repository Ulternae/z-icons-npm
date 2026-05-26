import React from 'react';

export interface LanGameBoardAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoardAltThin: React.FC<LanGameBoardAltThinProps>;
export default LanGameBoardAltThin;
