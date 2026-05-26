import React from 'react';

export interface LanCircleStopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleStopRegular: React.FC<LanCircleStopRegularProps>;
export default LanCircleStopRegular;
