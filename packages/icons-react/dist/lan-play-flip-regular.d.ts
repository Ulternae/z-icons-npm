import React from 'react';

export interface LanPlayFlipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayFlipRegular: React.FC<LanPlayFlipRegularProps>;
export default LanPlayFlipRegular;
