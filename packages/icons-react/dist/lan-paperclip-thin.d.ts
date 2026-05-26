import React from 'react';

export interface LanPaperclipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperclipThin: React.FC<LanPaperclipThinProps>;
export default LanPaperclipThin;
