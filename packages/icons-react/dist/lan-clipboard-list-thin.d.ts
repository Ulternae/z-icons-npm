import React from 'react';

export interface LanClipboardListThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardListThin: React.FC<LanClipboardListThinProps>;
export default LanClipboardListThin;
