import React from 'react';

export interface LanCircleUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserRegular: React.FC<LanCircleUserRegularProps>;
export default LanCircleUserRegular;
