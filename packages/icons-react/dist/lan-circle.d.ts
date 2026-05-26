import React from 'react';

export interface LanCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle: React.FC<LanCircleProps>;
export default LanCircle;
