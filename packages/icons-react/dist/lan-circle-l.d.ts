import React from 'react';

export interface LanCircleLProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleL: React.FC<LanCircleLProps>;
export default LanCircleL;
