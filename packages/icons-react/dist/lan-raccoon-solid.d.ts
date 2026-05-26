import React from 'react';

export interface LanRaccoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaccoonSolid: React.FC<LanRaccoonSolidProps>;
export default LanRaccoonSolid;
