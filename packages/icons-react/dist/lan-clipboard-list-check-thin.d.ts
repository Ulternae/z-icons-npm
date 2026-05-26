import React from 'react';

export interface LanClipboardListCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardListCheckThin: React.FC<LanClipboardListCheckThinProps>;
export default LanClipboardListCheckThin;
