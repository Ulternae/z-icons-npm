import React from 'react';

export interface LanCircleRProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleR: React.FC<LanCircleRProps>;
export default LanCircleR;
