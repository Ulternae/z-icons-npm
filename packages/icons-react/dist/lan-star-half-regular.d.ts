import React from 'react';

export interface LanStarHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarHalfRegular: React.FC<LanStarHalfRegularProps>;
export default LanStarHalfRegular;
