import React from 'react';

export interface LanArrowsToCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToCircleRegular: React.FC<LanArrowsToCircleRegularProps>;
export default LanArrowsToCircleRegular;
