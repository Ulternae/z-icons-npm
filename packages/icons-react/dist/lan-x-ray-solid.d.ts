import React from 'react';

export interface LanXRaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXRaySolid: React.FC<LanXRaySolidProps>;
export default LanXRaySolid;
