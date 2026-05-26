import React from 'react';

export interface LanSquareWonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareWon: React.FC<LanSquareWonProps>;
export default LanSquareWon;
