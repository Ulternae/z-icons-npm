import React from 'react';

export interface LanCardHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardHeartSolid: React.FC<LanCardHeartSolidProps>;
export default LanCardHeartSolid;
