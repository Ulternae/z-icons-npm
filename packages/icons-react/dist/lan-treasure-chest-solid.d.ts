import React from 'react';

export interface LanTreasureChestSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreasureChestSolid: React.FC<LanTreasureChestSolidProps>;
export default LanTreasureChestSolid;
