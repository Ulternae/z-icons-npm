import React from 'react';

export interface LanBahtSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBahtSignSolid: React.FC<LanBahtSignSolidProps>;
export default LanBahtSignSolid;
