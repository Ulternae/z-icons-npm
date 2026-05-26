import React from 'react';

export interface LanSprayCanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSprayCanSolid: React.FC<LanSprayCanSolidProps>;
export default LanSprayCanSolid;
