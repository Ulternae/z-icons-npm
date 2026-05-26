import React from 'react';

export interface LanCircleEProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleE: React.FC<LanCircleEProps>;
export default LanCircleE;
