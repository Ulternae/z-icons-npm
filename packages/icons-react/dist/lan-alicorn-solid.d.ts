import React from 'react';

export interface LanAlicornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlicornSolid: React.FC<LanAlicornSolidProps>;
export default LanAlicornSolid;
