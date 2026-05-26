import React from 'react';

export interface LanCircleFProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleF: React.FC<LanCircleFProps>;
export default LanCircleF;
