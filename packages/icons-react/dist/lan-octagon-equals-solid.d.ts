import React from 'react';

export interface LanOctagonEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonEqualsSolid: React.FC<LanOctagonEqualsSolidProps>;
export default LanOctagonEqualsSolid;
