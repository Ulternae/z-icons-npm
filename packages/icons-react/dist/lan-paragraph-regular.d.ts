import React from 'react';

export interface LanParagraphRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanParagraphRegular: React.FC<LanParagraphRegularProps>;
export default LanParagraphRegular;
