import React from 'react';

export interface LanShareAltSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareAltSquare: React.FC<LanShareAltSquareProps>;
export default LanShareAltSquare;
