import React from 'react';

export interface LanCircleRubleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRubleSolid: React.FC<LanCircleRubleSolidProps>;
export default LanCircleRubleSolid;
