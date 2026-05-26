import React from 'react';

export interface LanSplitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSplitSolid: React.FC<LanSplitSolidProps>;
export default LanSplitSolid;
