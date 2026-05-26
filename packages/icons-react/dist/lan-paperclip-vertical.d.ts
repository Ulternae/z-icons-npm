import React from 'react';

export interface LanPaperclipVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperclipVertical: React.FC<LanPaperclipVerticalProps>;
export default LanPaperclipVertical;
