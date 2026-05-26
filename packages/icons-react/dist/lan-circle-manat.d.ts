import React from 'react';

export interface LanCircleManatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleManat: React.FC<LanCircleManatProps>;
export default LanCircleManat;
