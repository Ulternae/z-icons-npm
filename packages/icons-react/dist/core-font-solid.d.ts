import React from 'react';

export interface CoreFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFontSolid: React.FC<CoreFontSolidProps>;
export default CoreFontSolid;
