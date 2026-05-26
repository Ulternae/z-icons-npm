import React from 'react';

export interface LanCircleWSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWSolid: React.FC<LanCircleWSolidProps>;
export default LanCircleWSolid;
