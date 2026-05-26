import React from 'react';

export interface LanStairsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairsSolid: React.FC<LanStairsSolidProps>;
export default LanStairsSolid;
