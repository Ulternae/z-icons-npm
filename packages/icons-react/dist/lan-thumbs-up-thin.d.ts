import React from 'react';

export interface LanThumbsUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsUpThin: React.FC<LanThumbsUpThinProps>;
export default LanThumbsUpThin;
