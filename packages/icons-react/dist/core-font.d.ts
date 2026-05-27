import React from 'react';

export interface CoreFontProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFont: React.FC<CoreFontProps>;
export default CoreFont;
