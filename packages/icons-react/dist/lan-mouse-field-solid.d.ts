import React from 'react';

export interface LanMouseFieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMouseFieldSolid: React.FC<LanMouseFieldSolidProps>;
export default LanMouseFieldSolid;
