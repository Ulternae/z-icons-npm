import React from 'react';

export interface LanIdCardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIdCardSolid: React.FC<LanIdCardSolidProps>;
export default LanIdCardSolid;
