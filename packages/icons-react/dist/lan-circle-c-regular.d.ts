import React from 'react';

export interface LanCircleCRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCRegular: React.FC<LanCircleCRegularProps>;
export default LanCircleCRegular;
