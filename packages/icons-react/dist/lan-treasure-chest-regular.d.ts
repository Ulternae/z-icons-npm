import React from 'react';

export interface LanTreasureChestRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreasureChestRegular: React.FC<LanTreasureChestRegularProps>;
export default LanTreasureChestRegular;
