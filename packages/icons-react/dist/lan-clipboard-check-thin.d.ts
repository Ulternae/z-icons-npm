import React from 'react';

export interface LanClipboardCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardCheckThin: React.FC<LanClipboardCheckThinProps>;
export default LanClipboardCheckThin;
