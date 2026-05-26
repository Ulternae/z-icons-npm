import React from 'react';

export interface LanUserCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserCheckSolid: React.FC<LanUserCheckSolidProps>;
export default LanUserCheckSolid;
