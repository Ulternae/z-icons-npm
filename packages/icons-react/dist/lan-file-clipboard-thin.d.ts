import React from 'react';

export interface LanFileClipboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileClipboardThin: React.FC<LanFileClipboardThinProps>;
export default LanFileClipboardThin;
