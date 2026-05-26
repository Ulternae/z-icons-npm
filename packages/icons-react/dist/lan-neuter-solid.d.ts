import React from 'react';

export interface LanNeuterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNeuterSolid: React.FC<LanNeuterSolidProps>;
export default LanNeuterSolid;
