import React from 'react';

export interface LanChestDrawersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChestDrawers: React.FC<LanChestDrawersProps>;
export default LanChestDrawers;
