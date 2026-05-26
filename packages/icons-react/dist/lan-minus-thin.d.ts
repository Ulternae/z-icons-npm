import React from 'react';

export interface LanMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusThin: React.FC<LanMinusThinProps>;
export default LanMinusThin;
