import React from 'react';

export interface LanGameBoardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoardSolid: React.FC<LanGameBoardSolidProps>;
export default LanGameBoardSolid;
