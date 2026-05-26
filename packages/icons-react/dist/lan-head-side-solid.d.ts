import React from 'react';

export interface LanHeadSideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeadSideSolid: React.FC<LanHeadSideSolidProps>;
export default LanHeadSideSolid;
