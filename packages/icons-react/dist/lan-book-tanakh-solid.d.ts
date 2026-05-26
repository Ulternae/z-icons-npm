import React from 'react';

export interface LanBookTanakhSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookTanakhSolid: React.FC<LanBookTanakhSolidProps>;
export default LanBookTanakhSolid;
