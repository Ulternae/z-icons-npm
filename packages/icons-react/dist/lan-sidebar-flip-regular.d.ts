import React from 'react';

export interface LanSidebarFlipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSidebarFlipRegular: React.FC<LanSidebarFlipRegularProps>;
export default LanSidebarFlipRegular;
