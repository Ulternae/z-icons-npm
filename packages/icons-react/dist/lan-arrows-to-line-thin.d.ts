import React from 'react';

export interface LanArrowsToLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToLineThin: React.FC<LanArrowsToLineThinProps>;
export default LanArrowsToLineThin;
