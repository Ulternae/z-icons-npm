import React from 'react';

export interface LanWormSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWormSolid: React.FC<LanWormSolidProps>;
export default LanWormSolid;
