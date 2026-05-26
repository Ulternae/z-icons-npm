import React from 'react';

export interface LanOctagonPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonPlusSolid: React.FC<LanOctagonPlusSolidProps>;
export default LanOctagonPlusSolid;
