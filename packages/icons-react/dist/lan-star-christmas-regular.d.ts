import React from 'react';

export interface LanStarChristmasRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarChristmasRegular: React.FC<LanStarChristmasRegularProps>;
export default LanStarChristmasRegular;
