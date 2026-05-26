import React from 'react';

export interface LanBarProgressFullSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressFullSolid: React.FC<LanBarProgressFullSolidProps>;
export default LanBarProgressFullSolid;
