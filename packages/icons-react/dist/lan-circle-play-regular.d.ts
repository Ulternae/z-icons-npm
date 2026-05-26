import React from 'react';

export interface LanCirclePlayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlayRegular: React.FC<LanCirclePlayRegularProps>;
export default LanCirclePlayRegular;
