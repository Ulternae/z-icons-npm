import React from 'react';

export interface LanFileEpsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileEpsThin: React.FC<LanFileEpsThinProps>;
export default LanFileEpsThin;
