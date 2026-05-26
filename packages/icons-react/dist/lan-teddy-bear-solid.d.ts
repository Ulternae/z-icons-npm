import React from 'react';

export interface LanTeddyBearSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeddyBearSolid: React.FC<LanTeddyBearSolidProps>;
export default LanTeddyBearSolid;
