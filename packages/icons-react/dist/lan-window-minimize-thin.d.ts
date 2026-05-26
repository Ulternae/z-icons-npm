import React from 'react';

export interface LanWindowMinimizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowMinimizeThin: React.FC<LanWindowMinimizeThinProps>;
export default LanWindowMinimizeThin;
