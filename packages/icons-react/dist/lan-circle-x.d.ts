import React from 'react';

export interface LanCircleXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleX: React.FC<LanCircleXProps>;
export default LanCircleX;
