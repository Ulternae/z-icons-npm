import React from 'react';

export interface LanCircleWonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWonRegular: React.FC<LanCircleWonRegularProps>;
export default LanCircleWonRegular;
