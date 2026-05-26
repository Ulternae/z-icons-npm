import React from 'react';

export interface LanYenSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanYenSignSolid: React.FC<LanYenSignSolidProps>;
export default LanYenSignSolid;
