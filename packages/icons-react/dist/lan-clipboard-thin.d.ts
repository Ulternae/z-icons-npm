import React from 'react';

export interface LanClipboardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardThin: React.FC<LanClipboardThinProps>;
export default LanClipboardThin;
