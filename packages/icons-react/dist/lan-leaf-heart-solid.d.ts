import React from 'react';

export interface LanLeafHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeafHeartSolid: React.FC<LanLeafHeartSolidProps>;
export default LanLeafHeartSolid;
