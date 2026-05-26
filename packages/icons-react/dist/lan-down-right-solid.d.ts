import React from 'react';

export interface LanDownRightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownRightSolid: React.FC<LanDownRightSolidProps>;
export default LanDownRightSolid;
