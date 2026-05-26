import React from 'react';

export interface LanChestDrawersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChestDrawersSolid: React.FC<LanChestDrawersSolidProps>;
export default LanChestDrawersSolid;
