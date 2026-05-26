import React from 'react';

export interface LanH3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH3Solid: React.FC<LanH3SolidProps>;
export default LanH3Solid;
