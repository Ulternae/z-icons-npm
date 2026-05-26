import React from 'react';

export interface LanCircleWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleW: React.FC<LanCircleWProps>;
export default LanCircleW;
