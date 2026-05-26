import React from 'react';

export interface LanCircleARegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleARegular: React.FC<LanCircleARegularProps>;
export default LanCircleARegular;
