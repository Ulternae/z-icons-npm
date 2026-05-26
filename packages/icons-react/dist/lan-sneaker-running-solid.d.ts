import React from 'react';

export interface LanSneakerRunningSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSneakerRunningSolid: React.FC<LanSneakerRunningSolidProps>;
export default LanSneakerRunningSolid;
