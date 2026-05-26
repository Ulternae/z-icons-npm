import React from 'react';

export interface LanCircleNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleN: React.FC<LanCircleNProps>;
export default LanCircleN;
