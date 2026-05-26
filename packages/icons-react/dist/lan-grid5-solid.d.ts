import React from 'react';

export interface LanGrid5SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid5Solid: React.FC<LanGrid5SolidProps>;
export default LanGrid5Solid;
