import React from 'react';

export interface LanNotEqualSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNotEqualSolid: React.FC<LanNotEqualSolidProps>;
export default LanNotEqualSolid;
