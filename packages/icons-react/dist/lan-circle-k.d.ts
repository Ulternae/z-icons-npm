import React from 'react';

export interface LanCircleKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleK: React.FC<LanCircleKProps>;
export default LanCircleK;
