import React from 'react';

export interface LanGameBoardAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGameBoardAlt: React.FC<LanGameBoardAltProps>;
export default LanGameBoardAlt;
