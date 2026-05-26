import React from 'react';

export interface LanFontCaseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFontCaseSolid: React.FC<LanFontCaseSolidProps>;
export default LanFontCaseSolid;
