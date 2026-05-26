import React from 'react';

export interface LanCircleEurozoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEurozoneSolid: React.FC<LanCircleEurozoneSolidProps>;
export default LanCircleEurozoneSolid;
