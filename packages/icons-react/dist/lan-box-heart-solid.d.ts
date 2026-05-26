import React from 'react';

export interface LanBoxHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxHeartSolid: React.FC<LanBoxHeartSolidProps>;
export default LanBoxHeartSolid;
