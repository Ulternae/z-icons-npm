import React from 'react';

export interface LanArrowsFromLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsFromLineThin: React.FC<LanArrowsFromLineThinProps>;
export default LanArrowsFromLineThin;
