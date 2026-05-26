import React from 'react';

export interface LanSquareDashedCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDashedCirclePlusThin: React.FC<LanSquareDashedCirclePlusThinProps>;
export default LanSquareDashedCirclePlusThin;
