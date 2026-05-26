import React from 'react';

export interface LanPaperclipVerticalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperclipVerticalThin: React.FC<LanPaperclipVerticalThinProps>;
export default LanPaperclipVerticalThin;
