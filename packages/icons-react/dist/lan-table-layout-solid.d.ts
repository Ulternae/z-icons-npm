import React from 'react';

export interface LanTableLayoutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableLayoutSolid: React.FC<LanTableLayoutSolidProps>;
export default LanTableLayoutSolid;
