import React from 'react';

export interface LanCircle1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle1: React.FC<LanCircle1Props>;
export default LanCircle1;
