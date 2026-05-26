import React from 'react';

export interface LanSquareCruzeiroSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareCruzeiroSolid: React.FC<LanSquareCruzeiroSolidProps>;
export default LanSquareCruzeiroSolid;
