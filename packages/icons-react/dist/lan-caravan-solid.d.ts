import React from 'react';

export interface LanCaravanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravanSolid: React.FC<LanCaravanSolidProps>;
export default LanCaravanSolid;
