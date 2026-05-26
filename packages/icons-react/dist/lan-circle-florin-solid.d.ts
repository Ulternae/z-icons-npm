import React from 'react';

export interface LanCircleFlorinSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleFlorinSolid: React.FC<LanCircleFlorinSolidProps>;
export default LanCircleFlorinSolid;
