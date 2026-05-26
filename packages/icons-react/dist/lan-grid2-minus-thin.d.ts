import React from 'react';

export interface LanGrid2MinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2MinusThin: React.FC<LanGrid2MinusThinProps>;
export default LanGrid2MinusThin;
