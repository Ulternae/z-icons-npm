import React from 'react';

export interface LanArrowProgressRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowProgressRegular: React.FC<LanArrowProgressRegularProps>;
export default LanArrowProgressRegular;
