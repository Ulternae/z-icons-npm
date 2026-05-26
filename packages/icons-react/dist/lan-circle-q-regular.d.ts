import React from 'react';

export interface LanCircleQRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQRegular: React.FC<LanCircleQRegularProps>;
export default LanCircleQRegular;
