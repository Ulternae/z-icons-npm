import React from 'react';

export interface LanFlowerTulipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFlowerTulipRegular: React.FC<LanFlowerTulipRegularProps>;
export default LanFlowerTulipRegular;
