import React from 'react';

export interface LanCircleORegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleORegular: React.FC<LanCircleORegularProps>;
export default LanCircleORegular;
