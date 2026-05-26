import React from 'react';

export interface LanMicrochipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrochipSolid: React.FC<LanMicrochipSolidProps>;
export default LanMicrochipSolid;
