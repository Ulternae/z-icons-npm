import React from 'react';

export interface LanUpLeftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpLeftSolid: React.FC<LanUpLeftSolidProps>;
export default LanUpLeftSolid;
