import React from 'react';

export interface LanCircleEuroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEuroSolid: React.FC<LanCircleEuroSolidProps>;
export default LanCircleEuroSolid;
