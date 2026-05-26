import React from 'react';

export interface LanMicrochipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrochipRegular: React.FC<LanMicrochipRegularProps>;
export default LanMicrochipRegular;
