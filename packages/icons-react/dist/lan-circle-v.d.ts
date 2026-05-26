import React from 'react';

export interface LanCircleVProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleV: React.FC<LanCircleVProps>;
export default LanCircleV;
