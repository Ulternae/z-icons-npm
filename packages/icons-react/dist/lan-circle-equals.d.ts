import React from 'react';

export interface LanCircleEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEquals: React.FC<LanCircleEqualsProps>;
export default LanCircleEquals;
