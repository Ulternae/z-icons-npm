import React from 'react';

export interface LanCircle2ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircle2Thin: React.FC<LanCircle2ThinProps>;
export default LanCircle2Thin;
