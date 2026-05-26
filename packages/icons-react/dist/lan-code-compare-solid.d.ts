import React from 'react';

export interface LanCodeCompareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeCompareSolid: React.FC<LanCodeCompareSolidProps>;
export default LanCodeCompareSolid;
