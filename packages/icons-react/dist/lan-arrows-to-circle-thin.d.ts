import React from 'react';

export interface LanArrowsToCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToCircleThin: React.FC<LanArrowsToCircleThinProps>;
export default LanArrowsToCircleThin;
