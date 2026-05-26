import React from 'react';

export interface LanCompassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassSolid: React.FC<LanCompassSolidProps>;
export default LanCompassSolid;
