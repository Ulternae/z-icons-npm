import React from 'react';

export interface LanCircleCProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleC: React.FC<LanCircleCProps>;
export default LanCircleC;
