import React from 'react';

export interface LanFontSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFontSolid: React.FC<LanFontSolidProps>;
export default LanFontSolid;
