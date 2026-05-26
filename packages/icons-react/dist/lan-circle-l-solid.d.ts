import React from 'react';

export interface LanCircleLSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleLSolid: React.FC<LanCircleLSolidProps>;
export default LanCircleLSolid;
