import React from 'react';

export interface LanFileClipboardSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileClipboardSolid: React.FC<LanFileClipboardSolidProps>;
export default LanFileClipboardSolid;
