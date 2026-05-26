import React from 'react';

export interface LanFlagUsaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlagUsaSolid: React.FC<LanFlagUsaSolidProps>;
export default LanFlagUsaSolid;
