import React from 'react';

export interface LanCodeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeSolid: React.FC<LanCodeSolidProps>;
export default LanCodeSolid;
