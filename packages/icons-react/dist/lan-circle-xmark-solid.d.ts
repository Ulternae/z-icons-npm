import React from 'react';

export interface LanCircleXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleXmarkSolid: React.FC<LanCircleXmarkSolidProps>;
export default LanCircleXmarkSolid;
