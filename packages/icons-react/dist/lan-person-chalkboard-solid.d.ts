import React from 'react';

export interface LanPersonChalkboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonChalkboardSolid: React.FC<LanPersonChalkboardSolidProps>;
export default LanPersonChalkboardSolid;
