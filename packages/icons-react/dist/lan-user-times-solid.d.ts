import React from 'react';

export interface LanUserTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTimesSolid: React.FC<LanUserTimesSolidProps>;
export default LanUserTimesSolid;
