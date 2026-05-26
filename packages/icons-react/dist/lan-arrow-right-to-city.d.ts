import React from 'react';

export interface LanArrowRightToCityProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowRightToCity: React.FC<LanArrowRightToCityProps>;
export default LanArrowRightToCity;
