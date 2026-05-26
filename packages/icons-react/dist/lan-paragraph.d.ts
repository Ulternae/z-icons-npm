import React from 'react';

export interface LanParagraphProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParagraph: React.FC<LanParagraphProps>;
export default LanParagraph;
