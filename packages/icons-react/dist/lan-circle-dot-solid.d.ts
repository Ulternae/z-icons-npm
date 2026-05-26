import React from 'react';

export interface LanCircleDotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDotSolid: React.FC<LanCircleDotSolidProps>;
export default LanCircleDotSolid;
