import React from 'react';

export interface LanH2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH2Solid: React.FC<LanH2SolidProps>;
export default LanH2Solid;
