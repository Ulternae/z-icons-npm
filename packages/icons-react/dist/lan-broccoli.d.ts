import React from 'react';

export interface LanBroccoliProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBroccoli: React.FC<LanBroccoliProps>;
export default LanBroccoli;
