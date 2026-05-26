import React from 'react';

export interface LanFileJsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileJsSolid: React.FC<LanFileJsSolidProps>;
export default LanFileJsSolid;
