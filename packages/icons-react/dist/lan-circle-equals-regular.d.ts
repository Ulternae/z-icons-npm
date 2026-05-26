import React from 'react';

export interface LanCircleEqualsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEqualsRegular: React.FC<LanCircleEqualsRegularProps>;
export default LanCircleEqualsRegular;
