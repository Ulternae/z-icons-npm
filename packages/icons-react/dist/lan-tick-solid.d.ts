import React from 'react';

export interface LanTickSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTickSolid: React.FC<LanTickSolidProps>;
export default LanTickSolid;
