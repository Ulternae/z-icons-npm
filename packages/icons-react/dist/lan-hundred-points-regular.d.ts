import React from 'react';

export interface LanHundredPointsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHundredPointsRegular: React.FC<LanHundredPointsRegularProps>;
export default LanHundredPointsRegular;
