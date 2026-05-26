import React from 'react';

export interface LanIglooSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanIglooSolid: React.FC<LanIglooSolidProps>;
export default LanIglooSolid;
