import React from 'react';

export interface LanAnglesUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAnglesUpDownSolid: React.FC<LanAnglesUpDownSolidProps>;
export default LanAnglesUpDownSolid;
