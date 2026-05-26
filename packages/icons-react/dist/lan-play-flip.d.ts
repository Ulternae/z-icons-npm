import React from 'react';

export interface LanPlayFlipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlayFlip: React.FC<LanPlayFlipProps>;
export default LanPlayFlip;
