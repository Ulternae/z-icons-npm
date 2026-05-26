import React from 'react';

export interface LanCircleLiraRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLiraRegular: React.FC<LanCircleLiraRegularProps>;
export default LanCircleLiraRegular;
