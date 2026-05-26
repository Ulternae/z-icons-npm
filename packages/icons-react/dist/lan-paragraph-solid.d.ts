import React from 'react';

export interface LanParagraphSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParagraphSolid: React.FC<LanParagraphSolidProps>;
export default LanParagraphSolid;
