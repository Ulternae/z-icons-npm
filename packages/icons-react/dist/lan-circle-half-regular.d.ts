import React from 'react';

export interface LanCircleHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHalfRegular: React.FC<LanCircleHalfRegularProps>;
export default LanCircleHalfRegular;
