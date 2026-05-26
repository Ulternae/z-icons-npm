import React from 'react';

export interface LanTireRuggedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireRuggedSolid: React.FC<LanTireRuggedSolidProps>;
export default LanTireRuggedSolid;
