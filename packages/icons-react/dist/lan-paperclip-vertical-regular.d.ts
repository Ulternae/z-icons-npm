import React from 'react';

export interface LanPaperclipVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperclipVerticalRegular: React.FC<LanPaperclipVerticalRegularProps>;
export default LanPaperclipVerticalRegular;
