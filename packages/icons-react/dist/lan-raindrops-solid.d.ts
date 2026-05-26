import React from 'react';

export interface LanRaindropsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaindropsSolid: React.FC<LanRaindropsSolidProps>;
export default LanRaindropsSolid;
