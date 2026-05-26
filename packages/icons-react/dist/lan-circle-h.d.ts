import React from 'react';

export interface LanCircleHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleH: React.FC<LanCircleHProps>;
export default LanCircleH;
