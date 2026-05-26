import React from 'react';

export interface LanCircleFlorinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleFlorin: React.FC<LanCircleFlorinProps>;
export default LanCircleFlorin;
