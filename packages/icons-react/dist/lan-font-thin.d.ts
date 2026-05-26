import React from 'react';

export interface LanFontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFontThin: React.FC<LanFontThinProps>;
export default LanFontThin;
