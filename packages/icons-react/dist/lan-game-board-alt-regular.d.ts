import React from 'react';

export interface LanGameBoardAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoardAltRegular: React.FC<LanGameBoardAltRegularProps>;
export default LanGameBoardAltRegular;
