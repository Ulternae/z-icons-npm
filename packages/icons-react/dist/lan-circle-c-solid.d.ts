import React from 'react';

export interface LanCircleCSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleCSolid: React.FC<LanCircleCSolidProps>;
export default LanCircleCSolid;
