import React from 'react';

export interface LanBookFontThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookFontThin: React.FC<LanBookFontThinProps>;
export default LanBookFontThin;
