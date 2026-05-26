import React from 'react';

export interface LanBarProgressEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressEmptyThin: React.FC<LanBarProgressEmptyThinProps>;
export default LanBarProgressEmptyThin;
