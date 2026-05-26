import React from 'react';

export interface LanParachuteBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParachuteBoxSolid: React.FC<LanParachuteBoxSolidProps>;
export default LanParachuteBoxSolid;
