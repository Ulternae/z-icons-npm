import React from 'react';

export interface LanWindsockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindsockSolid: React.FC<LanWindsockSolidProps>;
export default LanWindsockSolid;
