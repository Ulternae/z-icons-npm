import React from 'react';

export interface LanCircleURegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleURegular: React.FC<LanCircleURegularProps>;
export default LanCircleURegular;
