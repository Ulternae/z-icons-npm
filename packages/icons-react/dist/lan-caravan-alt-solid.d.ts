import React from 'react';

export interface LanCaravanAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCaravanAltSolid: React.FC<LanCaravanAltSolidProps>;
export default LanCaravanAltSolid;
