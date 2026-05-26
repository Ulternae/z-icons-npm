import React from 'react';

export interface LanCircleSmallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleSmallSolid: React.FC<LanCircleSmallSolidProps>;
export default LanCircleSmallSolid;
