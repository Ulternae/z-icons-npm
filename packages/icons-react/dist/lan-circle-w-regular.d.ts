import React from 'react';

export interface LanCircleWRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWRegular: React.FC<LanCircleWRegularProps>;
export default LanCircleWRegular;
