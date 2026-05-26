import React from 'react';

export interface LanPotatoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotatoSolid: React.FC<LanPotatoSolidProps>;
export default LanPotatoSolid;
