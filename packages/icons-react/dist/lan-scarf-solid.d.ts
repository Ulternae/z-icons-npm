import React from 'react';

export interface LanScarfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarfSolid: React.FC<LanScarfSolidProps>;
export default LanScarfSolid;
