import React from 'react';

export interface LanJSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanJSolid: React.FC<LanJSolidProps>;
export default LanJSolid;
