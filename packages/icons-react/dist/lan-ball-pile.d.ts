import React from 'react';

export interface LanBallPileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBallPile: React.FC<LanBallPileProps>;
export default LanBallPile;
