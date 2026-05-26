import React from 'react';

export interface LanSinkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSinkSolid: React.FC<LanSinkSolidProps>;
export default LanSinkSolid;
