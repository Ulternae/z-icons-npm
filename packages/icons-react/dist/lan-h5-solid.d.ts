import React from 'react';

export interface LanH5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH5Solid: React.FC<LanH5SolidProps>;
export default LanH5Solid;
