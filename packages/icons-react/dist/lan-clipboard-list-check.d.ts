import React from 'react';

export interface LanClipboardListCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClipboardListCheck: React.FC<LanClipboardListCheckProps>;
export default LanClipboardListCheck;
