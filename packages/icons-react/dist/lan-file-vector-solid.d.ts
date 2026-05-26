import React from 'react';

export interface LanFileVectorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVectorSolid: React.FC<LanFileVectorSolidProps>;
export default LanFileVectorSolid;
