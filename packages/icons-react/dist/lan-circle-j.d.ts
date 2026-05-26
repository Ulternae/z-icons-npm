import React from 'react';

export interface LanCircleJProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleJ: React.FC<LanCircleJProps>;
export default LanCircleJ;
