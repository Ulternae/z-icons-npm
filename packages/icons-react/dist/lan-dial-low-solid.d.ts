import React from 'react';

export interface LanDialLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialLowSolid: React.FC<LanDialLowSolidProps>;
export default LanDialLowSolid;
