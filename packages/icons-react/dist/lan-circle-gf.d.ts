import React from 'react';

export interface LanCircleGfProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleGf: React.FC<LanCircleGfProps>;
export default LanCircleGf;
