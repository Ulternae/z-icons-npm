import React from 'react';

export interface LanClapperboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClapperboardSolid: React.FC<LanClapperboardSolidProps>;
export default LanClapperboardSolid;
