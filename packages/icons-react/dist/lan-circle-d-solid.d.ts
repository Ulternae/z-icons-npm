import React from 'react';

export interface LanCircleDSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDSolid: React.FC<LanCircleDSolidProps>;
export default LanCircleDSolid;
