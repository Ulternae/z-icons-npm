import React from 'react';

export interface LanClipboardUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardUserThin: React.FC<LanClipboardUserThinProps>;
export default LanClipboardUserThin;
