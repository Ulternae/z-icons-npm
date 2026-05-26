import React from 'react';

export interface LanFiltersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFiltersThin: React.FC<LanFiltersThinProps>;
export default LanFiltersThin;
