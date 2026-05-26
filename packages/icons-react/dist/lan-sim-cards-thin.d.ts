import React from 'react';

export interface LanSimCardsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCardsThin: React.FC<LanSimCardsThinProps>;
export default LanSimCardsThin;
