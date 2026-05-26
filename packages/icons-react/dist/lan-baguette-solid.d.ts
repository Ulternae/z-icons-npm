import React from 'react';

export interface LanBaguetteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBaguetteSolid: React.FC<LanBaguetteSolidProps>;
export default LanBaguetteSolid;
