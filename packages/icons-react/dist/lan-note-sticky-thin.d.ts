import React from 'react';

export interface LanNoteStickyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteStickyThin: React.FC<LanNoteStickyThinProps>;
export default LanNoteStickyThin;
