import React from 'react';

export interface LanBellConciergeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellConciergeSolid: React.FC<LanBellConciergeSolidProps>;
export default LanBellConciergeSolid;
