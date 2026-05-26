import React from 'react';

export interface LanCircleEThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleEThin: React.FC<LanCircleEThinProps>;
export default LanCircleEThin;
