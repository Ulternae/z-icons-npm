import React from 'react';

export interface LanObjectUnionSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectUnionSolid: React.FC<LanObjectUnionSolidProps>;
export default LanObjectUnionSolid;
