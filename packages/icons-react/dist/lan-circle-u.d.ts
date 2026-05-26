import React from 'react';

export interface LanCircleUProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleU: React.FC<LanCircleUProps>;
export default LanCircleU;
