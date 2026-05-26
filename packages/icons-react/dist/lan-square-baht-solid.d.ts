import React from 'react';

export interface LanSquareBahtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBahtSolid: React.FC<LanSquareBahtSolidProps>;
export default LanSquareBahtSolid;
