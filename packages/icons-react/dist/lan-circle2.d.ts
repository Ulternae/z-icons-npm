import React from 'react';

export interface LanCircle2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle2: React.FC<LanCircle2Props>;
export default LanCircle2;
