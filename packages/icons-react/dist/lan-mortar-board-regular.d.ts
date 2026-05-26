import React from 'react';

export interface LanMortarBoardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMortarBoardRegular: React.FC<LanMortarBoardRegularProps>;
export default LanMortarBoardRegular;
