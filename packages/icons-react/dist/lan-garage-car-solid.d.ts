import React from 'react';

export interface LanGarageCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarageCarSolid: React.FC<LanGarageCarSolidProps>;
export default LanGarageCarSolid;
