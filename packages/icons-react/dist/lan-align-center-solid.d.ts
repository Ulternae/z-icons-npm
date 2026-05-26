import React from 'react';

export interface LanAlignCenterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlignCenterSolid: React.FC<LanAlignCenterSolidProps>;
export default LanAlignCenterSolid;
