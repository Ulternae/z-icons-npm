import React from 'react';

export interface LanCircleCentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCentSolid: React.FC<LanCircleCentSolidProps>;
export default LanCircleCentSolid;
