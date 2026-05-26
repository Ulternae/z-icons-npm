import React from 'react';

export interface LanItalicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanItalicSolid: React.FC<LanItalicSolidProps>;
export default LanItalicSolid;
