import React from 'react';

export interface LanArrowArcheryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowArcheryRegular: React.FC<LanArrowArcheryRegularProps>;
export default LanArrowArcheryRegular;
