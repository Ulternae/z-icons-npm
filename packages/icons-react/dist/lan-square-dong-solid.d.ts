import React from 'react';

export interface LanSquareDongSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDongSolid: React.FC<LanSquareDongSolidProps>;
export default LanSquareDongSolid;
