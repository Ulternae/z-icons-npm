import React from 'react';

export interface LanRocketSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRocketSolid: React.FC<LanRocketSolidProps>;
export default LanRocketSolid;
