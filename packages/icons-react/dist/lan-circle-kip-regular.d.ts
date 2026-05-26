import React from 'react';

export interface LanCircleKipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleKipRegular: React.FC<LanCircleKipRegularProps>;
export default LanCircleKipRegular;
