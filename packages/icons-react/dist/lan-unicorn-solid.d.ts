import React from 'react';

export interface LanUnicornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicornSolid: React.FC<LanUnicornSolidProps>;
export default LanUnicornSolid;
