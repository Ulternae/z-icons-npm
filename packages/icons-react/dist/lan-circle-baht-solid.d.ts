import React from 'react';

export interface LanCircleBahtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBahtSolid: React.FC<LanCircleBahtSolidProps>;
export default LanCircleBahtSolid;
