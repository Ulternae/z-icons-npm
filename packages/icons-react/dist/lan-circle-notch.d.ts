import React from 'react';

export interface LanCircleNotchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleNotch: React.FC<LanCircleNotchProps>;
export default LanCircleNotch;
