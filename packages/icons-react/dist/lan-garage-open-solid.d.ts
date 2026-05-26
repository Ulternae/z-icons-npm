import React from 'react';

export interface LanGarageOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageOpenSolid: React.FC<LanGarageOpenSolidProps>;
export default LanGarageOpenSolid;
