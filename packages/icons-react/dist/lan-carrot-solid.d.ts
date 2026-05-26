import React from 'react';

export interface LanCarrotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarrotSolid: React.FC<LanCarrotSolidProps>;
export default LanCarrotSolid;
