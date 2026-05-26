import React from 'react';

export interface LanUserCirclePlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCirclePlus: React.FC<LanUserCirclePlusProps>;
export default LanUserCirclePlus;
