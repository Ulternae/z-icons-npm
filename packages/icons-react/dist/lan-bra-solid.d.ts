import React from 'react';

export interface LanBraSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBraSolid: React.FC<LanBraSolidProps>;
export default LanBraSolid;
