import React from 'react';

export interface LanWindowMaximizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMaximizeThin: React.FC<LanWindowMaximizeThinProps>;
export default LanWindowMaximizeThin;
