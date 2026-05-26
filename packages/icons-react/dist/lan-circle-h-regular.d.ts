import React from 'react';

export interface LanCircleHRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHRegular: React.FC<LanCircleHRegularProps>;
export default LanCircleHRegular;
