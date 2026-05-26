import React from 'react';

export interface LanSaltShakerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSaltShakerSolid: React.FC<LanSaltShakerSolidProps>;
export default LanSaltShakerSolid;
