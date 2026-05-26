import React from 'react';

export interface LanKayakSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanKayakSolid: React.FC<LanKayakSolidProps>;
export default LanKayakSolid;
