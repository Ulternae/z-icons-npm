import React from 'react';

export interface LanCircleMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleMoon: React.FC<LanCircleMoonProps>;
export default LanCircleMoon;
