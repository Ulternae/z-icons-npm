import React from 'react';

export interface LanBookDeadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookDeadSolid: React.FC<LanBookDeadSolidProps>;
export default LanBookDeadSolid;
