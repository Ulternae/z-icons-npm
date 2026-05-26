import React from 'react';

export interface LanPaperclipProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperclip: React.FC<LanPaperclipProps>;
export default LanPaperclip;
