import React from 'react';

export interface LanBanjoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanjoSolid: React.FC<LanBanjoSolidProps>;
export default LanBanjoSolid;
