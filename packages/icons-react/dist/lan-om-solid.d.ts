import React from 'react';

export interface LanOmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOmSolid: React.FC<LanOmSolidProps>;
export default LanOmSolid;
