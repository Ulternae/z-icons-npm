import React from 'react';

export interface LanUserVisorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVisorSolid: React.FC<LanUserVisorSolidProps>;
export default LanUserVisorSolid;
