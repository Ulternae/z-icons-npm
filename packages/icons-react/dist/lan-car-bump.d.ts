import React from 'react';

export interface LanCarBumpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarBump: React.FC<LanCarBumpProps>;
export default LanCarBump;
