import React from 'react';

export interface LanCircleRupeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleRupeeSolid: React.FC<LanCircleRupeeSolidProps>;
export default LanCircleRupeeSolid;
