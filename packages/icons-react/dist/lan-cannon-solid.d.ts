import React from 'react';

export interface LanCannonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannonSolid: React.FC<LanCannonSolidProps>;
export default LanCannonSolid;
