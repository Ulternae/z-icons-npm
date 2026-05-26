import React from 'react';

export interface LanNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNSolid: React.FC<LanNSolidProps>;
export default LanNSolid;
