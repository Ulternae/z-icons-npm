import React from 'react';

export interface LanStarfighterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarfighterRegular: React.FC<LanStarfighterRegularProps>;
export default LanStarfighterRegular;
