import React from 'react';

export interface LanUserMdSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserMdSolid: React.FC<LanUserMdSolidProps>;
export default LanUserMdSolid;
