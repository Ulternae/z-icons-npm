import React from 'react';

export interface LanCircleChfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleChfRegular: React.FC<LanCircleChfRegularProps>;
export default LanCircleChfRegular;
