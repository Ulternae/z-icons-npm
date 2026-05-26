import React from 'react';

export interface LanCircleERegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleERegular: React.FC<LanCircleERegularProps>;
export default LanCircleERegular;
