import React from 'react';

export interface LanH6SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanH6Solid: React.FC<LanH6SolidProps>;
export default LanH6Solid;
