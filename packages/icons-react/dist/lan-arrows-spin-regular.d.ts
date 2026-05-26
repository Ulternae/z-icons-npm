import React from 'react';

export interface LanArrowsSpinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsSpinRegular: React.FC<LanArrowsSpinRegularProps>;
export default LanArrowsSpinRegular;
