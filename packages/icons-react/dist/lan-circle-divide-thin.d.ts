import React from 'react';

export interface LanCircleDivideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDivideThin: React.FC<LanCircleDivideThinProps>;
export default LanCircleDivideThin;
