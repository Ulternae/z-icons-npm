import React from 'react';

export interface LanFileHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHeartSolid: React.FC<LanFileHeartSolidProps>;
export default LanFileHeartSolid;
