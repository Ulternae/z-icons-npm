import React from 'react';

export interface CoreFontCaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreFontCaseSolid: React.FC<CoreFontCaseSolidProps>;
export default CoreFontCaseSolid;
