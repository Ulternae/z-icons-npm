import React from 'react';

export interface LanGrid4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid4Solid: React.FC<LanGrid4SolidProps>;
export default LanGrid4Solid;
