import React from 'react';

export interface LanBrailleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrailleSolid: React.FC<LanBrailleSolidProps>;
export default LanBrailleSolid;
