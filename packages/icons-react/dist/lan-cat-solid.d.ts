import React from 'react';

export interface LanCatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCatSolid: React.FC<LanCatSolidProps>;
export default LanCatSolid;
