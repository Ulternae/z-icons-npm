import React from 'react';

export interface LanBlockBrickFireProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlockBrickFire: React.FC<LanBlockBrickFireProps>;
export default LanBlockBrickFire;
