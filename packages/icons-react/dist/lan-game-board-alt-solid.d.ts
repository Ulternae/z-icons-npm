import React from 'react';

export interface LanGameBoardAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoardAltSolid: React.FC<LanGameBoardAltSolidProps>;
export default LanGameBoardAltSolid;
