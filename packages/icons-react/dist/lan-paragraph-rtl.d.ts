import React from 'react';

export interface LanParagraphRtlProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParagraphRtl: React.FC<LanParagraphRtlProps>;
export default LanParagraphRtl;
