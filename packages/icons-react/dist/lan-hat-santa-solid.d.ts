import React from 'react';

export interface LanHatSantaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHatSantaSolid: React.FC<LanHatSantaSolidProps>;
export default LanHatSantaSolid;
