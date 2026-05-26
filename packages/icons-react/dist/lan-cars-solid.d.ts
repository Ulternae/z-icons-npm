import React from 'react';

export interface LanCarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarsSolid: React.FC<LanCarsSolidProps>;
export default LanCarsSolid;
