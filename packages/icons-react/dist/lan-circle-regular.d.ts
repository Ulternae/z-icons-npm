import React from 'react';

export interface LanCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRegular: React.FC<LanCircleRegularProps>;
export default LanCircleRegular;
