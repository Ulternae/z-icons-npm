import React from 'react';

export interface LanCircleJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleJSolid: React.FC<LanCircleJSolidProps>;
export default LanCircleJSolid;
