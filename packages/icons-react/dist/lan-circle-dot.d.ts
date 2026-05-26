import React from 'react';

export interface LanCircleDotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDot: React.FC<LanCircleDotProps>;
export default LanCircleDot;
