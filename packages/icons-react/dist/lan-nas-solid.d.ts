import React from 'react';

export interface LanNasSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNasSolid: React.FC<LanNasSolidProps>;
export default LanNasSolid;
