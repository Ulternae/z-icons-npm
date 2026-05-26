import React from 'react';

export interface LanAbacusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAbacusThin: React.FC<LanAbacusThinProps>;
export default LanAbacusThin;
