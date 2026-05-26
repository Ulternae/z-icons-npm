import React from 'react';

export interface LanUserPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPlusSolid: React.FC<LanUserPlusSolidProps>;
export default LanUserPlusSolid;
