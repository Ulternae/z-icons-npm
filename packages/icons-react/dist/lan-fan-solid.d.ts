import React from 'react';

export interface LanFanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFanSolid: React.FC<LanFanSolidProps>;
export default LanFanSolid;
