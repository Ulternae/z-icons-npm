import React from 'react';

export interface LanBoxCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoxCheckSolid: React.FC<LanBoxCheckSolidProps>;
export default LanBoxCheckSolid;
