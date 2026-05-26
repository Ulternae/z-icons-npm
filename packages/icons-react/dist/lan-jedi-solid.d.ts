import React from 'react';

export interface LanJediSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJediSolid: React.FC<LanJediSolidProps>;
export default LanJediSolid;
