import React from 'react';

export interface LanRocketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocket: React.FC<LanRocketProps>;
export default LanRocket;
