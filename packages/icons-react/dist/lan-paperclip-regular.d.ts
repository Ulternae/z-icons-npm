import React from 'react';

export interface LanPaperclipRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaperclipRegular: React.FC<LanPaperclipRegularProps>;
export default LanPaperclipRegular;
