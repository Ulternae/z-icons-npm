import React from 'react';

export interface LanHandSpockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSpockSolid: React.FC<LanHandSpockSolidProps>;
export default LanHandSpockSolid;
