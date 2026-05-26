import React from 'react';

export interface LanStarShootingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarShooting: React.FC<LanStarShootingProps>;
export default LanStarShooting;
