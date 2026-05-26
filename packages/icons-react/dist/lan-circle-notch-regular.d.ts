import React from 'react';

export interface LanCircleNotchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNotchRegular: React.FC<LanCircleNotchRegularProps>;
export default LanCircleNotchRegular;
