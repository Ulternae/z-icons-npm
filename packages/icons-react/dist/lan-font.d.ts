import React from 'react';

export interface LanFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFont: React.FC<LanFontProps>;
export default LanFont;
