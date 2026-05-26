import React from 'react';

export interface LanBookFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookFont: React.FC<LanBookFontProps>;
export default LanBookFont;
