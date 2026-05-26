import React from 'react';

export interface LanCircleQProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleQ: React.FC<LanCircleQProps>;
export default LanCircleQ;
