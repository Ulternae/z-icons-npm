import React from 'react';

export interface LanCircleYenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleYenSolid: React.FC<LanCircleYenSolidProps>;
export default LanCircleYenSolid;
