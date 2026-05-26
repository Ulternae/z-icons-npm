import React from 'react';

export interface LanOarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOarSolid: React.FC<LanOarSolidProps>;
export default LanOarSolid;
