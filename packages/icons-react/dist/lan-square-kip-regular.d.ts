import React from 'react';

export interface LanSquareKipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareKipRegular: React.FC<LanSquareKipRegularProps>;
export default LanSquareKipRegular;
