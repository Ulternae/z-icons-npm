import React from 'react';

export interface LanCircleWonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWon: React.FC<LanCircleWonProps>;
export default LanCircleWon;
