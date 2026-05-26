import React from 'react';

export interface LanOSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOSolid: React.FC<LanOSolidProps>;
export default LanOSolid;
