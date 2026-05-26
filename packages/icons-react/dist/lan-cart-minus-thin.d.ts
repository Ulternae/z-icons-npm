import React from 'react';

export interface LanCartMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartMinusThin: React.FC<LanCartMinusThinProps>;
export default LanCartMinusThin;
