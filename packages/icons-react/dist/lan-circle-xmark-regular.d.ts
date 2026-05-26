import React from 'react';

export interface LanCircleXmarkRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleXmarkRegular: React.FC<LanCircleXmarkRegularProps>;
export default LanCircleXmarkRegular;
