import React from 'react';

export interface LanFileWordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileWordSolid: React.FC<LanFileWordSolidProps>;
export default LanFileWordSolid;
