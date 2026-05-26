import React from 'react';

export interface LanStroopwafelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStroopwafelSolid: React.FC<LanStroopwafelSolidProps>;
export default LanStroopwafelSolid;
