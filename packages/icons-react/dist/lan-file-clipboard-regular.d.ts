import React from 'react';

export interface LanFileClipboardRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileClipboardRegular: React.FC<LanFileClipboardRegularProps>;
export default LanFileClipboardRegular;
