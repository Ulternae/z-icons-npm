import React from 'react';

export interface LanShirtRunningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShirtRunningSolid: React.FC<LanShirtRunningSolidProps>;
export default LanShirtRunningSolid;
