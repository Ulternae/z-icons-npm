import React from 'react';

export interface LanCircleShekelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleShekelSolid: React.FC<LanCircleShekelSolidProps>;
export default LanCircleShekelSolid;
