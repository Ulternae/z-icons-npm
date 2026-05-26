import React from 'react';

export interface LanEurozoneSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEurozoneSignSolid: React.FC<LanEurozoneSignSolidProps>;
export default LanEurozoneSignSolid;
