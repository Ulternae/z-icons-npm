import React from 'react';

export interface LanCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePlusThin: React.FC<LanCirclePlusThinProps>;
export default LanCirclePlusThin;
