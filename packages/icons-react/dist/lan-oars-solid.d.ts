import React from 'react';

export interface LanOarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOarsSolid: React.FC<LanOarsSolidProps>;
export default LanOarsSolid;
