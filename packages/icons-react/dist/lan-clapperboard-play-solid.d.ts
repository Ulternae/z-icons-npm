import React from 'react';

export interface LanClapperboardPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClapperboardPlaySolid: React.FC<LanClapperboardPlaySolidProps>;
export default LanClapperboardPlaySolid;
