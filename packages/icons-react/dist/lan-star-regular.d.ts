import React from 'react';

export interface LanStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarRegular: React.FC<LanStarRegularProps>;
export default LanStarRegular;
