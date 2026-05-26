import React from 'react';

export interface LanTreasureChestProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreasureChest: React.FC<LanTreasureChestProps>;
export default LanTreasureChest;
