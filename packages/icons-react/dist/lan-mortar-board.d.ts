import React from 'react';

export interface LanMortarBoardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarBoard: React.FC<LanMortarBoardProps>;
export default LanMortarBoard;
