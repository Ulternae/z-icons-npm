import React from 'react';

export interface LanBellsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellsSolid: React.FC<LanBellsSolidProps>;
export default LanBellsSolid;
