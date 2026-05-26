import React from 'react';

export interface LanStairCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairCarSolid: React.FC<LanStairCarSolidProps>;
export default LanStairCarSolid;
