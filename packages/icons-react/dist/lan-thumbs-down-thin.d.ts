import React from 'react';

export interface LanThumbsDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbsDownThin: React.FC<LanThumbsDownThinProps>;
export default LanThumbsDownThin;
