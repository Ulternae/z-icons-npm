import React from 'react';

export interface LanCircleTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleT: React.FC<LanCircleTProps>;
export default LanCircleT;
