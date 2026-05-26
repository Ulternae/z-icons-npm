import React from 'react';

export interface LanCircleHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleHeartRegular: React.FC<LanCircleHeartRegularProps>;
export default LanCircleHeartRegular;
