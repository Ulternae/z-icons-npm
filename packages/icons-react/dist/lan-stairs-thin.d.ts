import React from 'react';

export interface LanStairsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStairsThin: React.FC<LanStairsThinProps>;
export default LanStairsThin;
