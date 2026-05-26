import React from 'react';

export interface LanArrowsRotateThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsRotateThin: React.FC<LanArrowsRotateThinProps>;
export default LanArrowsRotateThin;
