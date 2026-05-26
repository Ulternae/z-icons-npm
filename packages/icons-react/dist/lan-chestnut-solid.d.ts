import React from 'react';

export interface LanChestnutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChestnutSolid: React.FC<LanChestnutSolidProps>;
export default LanChestnutSolid;
