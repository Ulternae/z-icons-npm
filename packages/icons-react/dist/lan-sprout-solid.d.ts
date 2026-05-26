import React from 'react';

export interface LanSproutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSproutSolid: React.FC<LanSproutSolidProps>;
export default LanSproutSolid;
