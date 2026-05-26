import React from 'react';

export interface LanDownLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownLeftSolid: React.FC<LanDownLeftSolidProps>;
export default LanDownLeftSolid;
