import React from 'react';

export interface LanUmbrellaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUmbrellaSolid: React.FC<LanUmbrellaSolidProps>;
export default LanUmbrellaSolid;
