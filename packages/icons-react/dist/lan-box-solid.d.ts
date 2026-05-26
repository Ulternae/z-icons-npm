import React from 'react';

export interface LanBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxSolid: React.FC<LanBoxSolidProps>;
export default LanBoxSolid;
