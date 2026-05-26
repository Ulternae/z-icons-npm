import React from 'react';

export interface LanCircleZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleZ: React.FC<LanCircleZProps>;
export default LanCircleZ;
