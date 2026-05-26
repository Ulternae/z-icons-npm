import React from 'react';

export interface LanCirclePSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePSolid: React.FC<LanCirclePSolidProps>;
export default LanCirclePSolid;
