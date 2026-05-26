import React from 'react';

export interface LanBuoyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBuoy: React.FC<LanBuoyProps>;
export default LanBuoy;
