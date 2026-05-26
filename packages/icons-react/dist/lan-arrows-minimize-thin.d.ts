import React from 'react';

export interface LanArrowsMinimizeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsMinimizeThin: React.FC<LanArrowsMinimizeThinProps>;
export default LanArrowsMinimizeThin;
