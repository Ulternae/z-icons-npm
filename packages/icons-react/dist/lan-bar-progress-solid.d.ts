import React from 'react';

export interface LanBarProgressSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressSolid: React.FC<LanBarProgressSolidProps>;
export default LanBarProgressSolid;
