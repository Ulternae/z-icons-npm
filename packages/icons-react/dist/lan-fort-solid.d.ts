import React from 'react';

export interface LanFortSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFortSolid: React.FC<LanFortSolidProps>;
export default LanFortSolid;
