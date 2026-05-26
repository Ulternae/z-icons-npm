import React from 'react';

export interface LanCircleEurozoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEurozoneThin: React.FC<LanCircleEurozoneThinProps>;
export default LanCircleEurozoneThin;
