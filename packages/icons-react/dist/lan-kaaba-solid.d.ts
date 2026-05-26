import React from 'react';

export interface LanKaabaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKaabaSolid: React.FC<LanKaabaSolidProps>;
export default LanKaabaSolid;
