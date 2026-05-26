import React from 'react';

export interface LanCentSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCentSignSolid: React.FC<LanCentSignSolidProps>;
export default LanCentSignSolid;
