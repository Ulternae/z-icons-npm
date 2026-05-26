import React from 'react';

export interface LanTugrikSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTugrikSignSolid: React.FC<LanTugrikSignSolidProps>;
export default LanTugrikSignSolid;
