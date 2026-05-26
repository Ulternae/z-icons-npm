import React from 'react';

export interface LanCircleUSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUSolid: React.FC<LanCircleUSolidProps>;
export default LanCircleUSolid;
