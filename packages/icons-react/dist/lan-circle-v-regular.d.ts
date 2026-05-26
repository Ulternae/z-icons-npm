import React from 'react';

export interface LanCircleVRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleVRegular: React.FC<LanCircleVRegularProps>;
export default LanCircleVRegular;
