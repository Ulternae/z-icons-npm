import React from 'react';

export interface LanFileHtmlSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileHtmlSolid: React.FC<LanFileHtmlSolidProps>;
export default LanFileHtmlSolid;
