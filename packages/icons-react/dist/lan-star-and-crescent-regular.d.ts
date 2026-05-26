import React from 'react';

export interface LanStarAndCrescentRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarAndCrescentRegular: React.FC<LanStarAndCrescentRegularProps>;
export default LanStarAndCrescentRegular;
