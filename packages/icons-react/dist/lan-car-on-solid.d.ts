import React from 'react';

export interface LanCarOnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarOnSolid: React.FC<LanCarOnSolidProps>;
export default LanCarOnSolid;
