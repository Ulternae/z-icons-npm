import React from 'react';

export interface LanCircleGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleG: React.FC<LanCircleGProps>;
export default LanCircleG;
