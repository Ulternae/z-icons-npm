import React from 'react';

export interface LanHammerWarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerWarSolid: React.FC<LanHammerWarSolidProps>;
export default LanHammerWarSolid;
