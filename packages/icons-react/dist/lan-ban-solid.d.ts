import React from 'react';

export interface LanBanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBanSolid: React.FC<LanBanSolidProps>;
export default LanBanSolid;
