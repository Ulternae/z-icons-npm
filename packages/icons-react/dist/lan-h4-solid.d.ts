import React from 'react';

export interface LanH4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH4Solid: React.FC<LanH4SolidProps>;
export default LanH4Solid;
