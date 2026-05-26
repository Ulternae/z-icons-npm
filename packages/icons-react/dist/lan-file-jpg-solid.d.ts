import React from 'react';

export interface LanFileJpgSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJpgSolid: React.FC<LanFileJpgSolidProps>;
export default LanFileJpgSolid;
