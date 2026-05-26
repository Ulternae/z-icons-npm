import React from 'react';

export interface LanGridHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridHorizontalSolid: React.FC<LanGridHorizontalSolidProps>;
export default LanGridHorizontalSolid;
