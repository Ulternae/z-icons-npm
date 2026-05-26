import React from 'react';

export interface LanCupTogoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupTogoSolid: React.FC<LanCupTogoSolidProps>;
export default LanCupTogoSolid;
