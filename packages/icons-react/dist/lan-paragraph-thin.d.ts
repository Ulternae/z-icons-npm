import React from 'react';

export interface LanParagraphThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParagraphThin: React.FC<LanParagraphThinProps>;
export default LanParagraphThin;
