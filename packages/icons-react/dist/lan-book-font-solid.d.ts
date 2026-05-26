import React from 'react';

export interface LanBookFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookFontSolid: React.FC<LanBookFontSolidProps>;
export default LanBookFontSolid;
