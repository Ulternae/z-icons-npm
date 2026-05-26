import React from 'react';

export interface LanBongSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBongSolid: React.FC<LanBongSolidProps>;
export default LanBongSolid;
