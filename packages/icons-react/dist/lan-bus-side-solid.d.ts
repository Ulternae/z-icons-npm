import React from 'react';

export interface LanBusSideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBusSideSolid: React.FC<LanBusSideSolidProps>;
export default LanBusSideSolid;
