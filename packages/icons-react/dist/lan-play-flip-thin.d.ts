import React from 'react';

export interface LanPlayFlipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayFlipThin: React.FC<LanPlayFlipThinProps>;
export default LanPlayFlipThin;
