import React from 'react';

export interface LanMortarBoardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarBoardThin: React.FC<LanMortarBoardThinProps>;
export default LanMortarBoardThin;
