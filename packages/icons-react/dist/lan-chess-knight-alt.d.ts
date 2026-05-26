import React from 'react';

export interface LanChessKnightAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChessKnightAlt: React.FC<LanChessKnightAltProps>;
export default LanChessKnightAlt;
