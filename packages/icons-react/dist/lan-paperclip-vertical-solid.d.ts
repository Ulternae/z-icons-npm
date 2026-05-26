import React from 'react';

export interface LanPaperclipVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperclipVerticalSolid: React.FC<LanPaperclipVerticalSolidProps>;
export default LanPaperclipVerticalSolid;
