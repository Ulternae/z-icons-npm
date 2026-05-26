import React from 'react';

export interface LanTreasureChestThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreasureChestThin: React.FC<LanTreasureChestThinProps>;
export default LanTreasureChestThin;
