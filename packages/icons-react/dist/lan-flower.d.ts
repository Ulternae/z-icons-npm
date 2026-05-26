import React from 'react';

export interface LanFlowerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlower: React.FC<LanFlowerProps>;
export default LanFlower;
