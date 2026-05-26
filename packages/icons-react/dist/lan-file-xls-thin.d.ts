import React from 'react';

export interface LanFileXlsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileXlsThin: React.FC<LanFileXlsThinProps>;
export default LanFileXlsThin;
