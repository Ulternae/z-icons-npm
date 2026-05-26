import React from 'react';

export interface LanCircleChfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleChfSolid: React.FC<LanCircleChfSolidProps>;
export default LanCircleChfSolid;
