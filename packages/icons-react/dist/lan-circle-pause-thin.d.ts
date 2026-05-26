import React from 'react';

export interface LanCirclePauseThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePauseThin: React.FC<LanCirclePauseThinProps>;
export default LanCirclePauseThin;
