import React from 'react';

export interface NeoPercentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPercentSolid: React.FC<NeoPercentSolidProps>;
export default NeoPercentSolid;
