import React from 'react';

export interface LanCircleSProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleS: React.FC<LanCircleSProps>;
export default LanCircleS;
