import React from 'react';

export interface LanCowbellCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCowbellCirclePlus: React.FC<LanCowbellCirclePlusProps>;
export default LanCowbellCirclePlus;
