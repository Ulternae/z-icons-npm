import React from 'react';

export interface LanCircleNRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNRegular: React.FC<LanCircleNRegularProps>;
export default LanCircleNRegular;
