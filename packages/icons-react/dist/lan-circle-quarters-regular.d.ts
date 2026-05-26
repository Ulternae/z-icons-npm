import React from 'react';

export interface LanCircleQuartersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQuartersRegular: React.FC<LanCircleQuartersRegularProps>;
export default LanCircleQuartersRegular;
