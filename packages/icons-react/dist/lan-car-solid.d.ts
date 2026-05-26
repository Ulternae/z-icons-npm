import React from 'react';

export interface LanCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSolid: React.FC<LanCarSolidProps>;
export default LanCarSolid;
